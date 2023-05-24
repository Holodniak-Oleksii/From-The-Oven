import Order from "@/api/order";
import { IconNewOpen } from "@/components/icons";
import { Spinner } from "@/components/ui";
import React, { useEffect, useState } from "react";
import DetailsOrder from "../../components/modals/details";
import { Background, Icon, Item, Row } from "./styles";

const Table = () => {
  const [orders, setOrders] = useState({ data: [], loading: false });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState([]);
  const api = new Order();

  const head = [
    "ID",
    "Order date",
    "Delivery address",
    "Amount",
    "Name",
    "Phone",
    "Details",
  ];

  useEffect(() => {
    const get = async () => {
      setOrders((prev) => ({ ...prev, loading: true }));
      const list = await api.getOrders(20);
      setOrders({ data: list.result, loading: false });
    };
    get();
  }, []);

  if (orders.loading) {
    return <Spinner />;
  }

  return (
    <Background>
      <Row head>
        {head.map((item, id) => (
          <Item key={id}>{item}</Item>
        ))}
      </Row>
      {orders.data?.map((item) => (
        <Row key={item.id}>
          <Item>{item.id}</Item>
          <Item>{item.orderDate}</Item>
          <Item>{item.deliveryAddress}</Item>
          <Item>{item.totalAmount}</Item>
          <Item>{item.customerName}</Item>
          <Item>{item.customerTelephone}</Item>
          <Item>
            <Icon
              onClick={() => {
                setActive(item.orderInfo);
                setOpen(true);
              }}
            >
              <IconNewOpen />
            </Icon>
          </Item>
        </Row>
      ))}

      <DetailsOrder close={() => setOpen(false)} open={open} data={active} />
    </Background>
  );
};

export default Table;
