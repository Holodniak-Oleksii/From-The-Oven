import Order from "@/api/order";
import Paginate from "@/components/paginate";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";
import DetailsOrder from "../../components/modals/details";
import { head } from "./data";
import TableLoader from "./load";
import { Background, Content, Icon, Item, Row } from "./styles";
const Table = () => {
  const [orders, setOrders] = useState({ data: [], loading: true });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState([]);
  const [page, setPage] = useState(1);
  const [update, setUpdate] = useState(1);

  const { enqueueSnackbar } = useSnackbar();

  const api = new Order();
  const itemsPerPage = 10;

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  const handleDelete = async (id) => {
    try {
      let exactlyDelete = window.confirm(
        "Are you sure you want to delete the order?"
      );
      if (exactlyDelete) {
        await api.deleteOrder(id);
        setUpdate(id);
        enqueueSnackbar("Delete successful", {
          variant: "success",
          autoHideDuration: 4000,
        });
      }
    } catch (e) {
      enqueueSnackbar(e.message, {
        variant: "error",
        autoHideDuration: 4000,
      });
    }
  };

  const handleDetails = (item) => {
    return () => {
      setActive(item);
      setOpen(true);
    };
  };

  useEffect(() => {
    const get = async () => {
      setOrders((prev) => ({ ...prev, loading: true }));
      const list = await api.getOrders(itemsPerPage, page);
      setOrders({ data: list, loading: false });
    };
    get();
  }, [page, update]);

  if (orders.loading) {
    return <TableLoader />;
  }

  return (
    <Background>
      <Content>
        <Row head>
          {head.map((item, id) => (
            <Item key={id}>{item}</Item>
          ))}
        </Row>
        {orders?.data?.result.map((item) => (
          <Row key={item.id}>
            <Item>{item.id}</Item>
            <Item>{item.orderDate}</Item>
            <Item>{item.deliveryAddress}</Item>
            <Item>{item.totalAmount}</Item>
            <Item>{item.customerName}</Item>
            <Item>{item.customerTelephone}</Item>
            <Item>
              <Icon onClick={handleDetails(item.orderInfo)}>
                <MdOpenInNew color='#000' />
              </Icon>
            </Item>
            <Item>
              <Icon onClick={() => handleDelete(item.id)}>
                <FiDelete color='#000' />
              </Icon>
            </Item>
          </Row>
        ))}
      </Content>
      {Math.ceil(orders.data?.total / itemsPerPage) > 1 && (
        <Paginate
          page={page}
          pageCount={Math.ceil(orders.data?.total / itemsPerPage)}
          handlePageClick={handlePageClick}
        />
      )}
      <DetailsOrder close={() => setOpen(false)} open={open} data={active} />
    </Background>
  );
};

export default Table;
