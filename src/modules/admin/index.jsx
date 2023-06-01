import Common from "@/api/common";
import bg from "@/assets/images/contact-bg.svg";
import Container from "@/components/containers";
import { Spinner } from "@/components/ui";
import { adminAuthAction } from "@/store/actions/admin";
import { useAdmin } from "@/store/selectors";
import JWT from "expo-jwt";
import { useEffect, useState } from "react";
import FormAuth from "./form";
import { Background, Wrapper } from "./styles";
import Table from "./table";

const AdminDashboard = () => {
  const api = new Common();
  const { token, isAuth } = useAdmin();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const check = async () => {
      if (token) {
        const decode = JWT.decode(token, process.env.REACT_APP_SECRET_KEY);
        const message = await api.login(decode);
        if (message.status === 200) {
          adminAuthAction();
        }
      }
      setLoading(false);
    };
    check();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Background>
      <img src={bg} alt='' />
      <Container>
        <Wrapper>{isAuth ? <Table /> : <FormAuth />}</Wrapper>
      </Container>
    </Background>
  );
};

export default AdminDashboard;
