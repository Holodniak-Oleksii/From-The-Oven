import bg from "@/assets/images/contact-bg.svg";
import Container from "@/components/containers";
import { useAdmin } from "@/store/selectors";
import FormAuth from "./form";
import { Background, Wrapper } from "./styles";
import Table from "./table";

const AdminDashboard = () => {
  const { login } = useAdmin();
  return (
    <Background>
      <img src={bg} alt='' />
      <Container>
        <Wrapper>{login ? <Table /> : <FormAuth />}</Wrapper>
      </Container>
    </Background>
  );
};

export default AdminDashboard;
