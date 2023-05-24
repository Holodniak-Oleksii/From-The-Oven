import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import { CloseButton, Column, Container, Head, Title, Wrapper } from "../style";
import { Item, List, Row } from "./style";

const DetailsOrder = ({ close, open, data }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <Wrapper onClick={close}>
        <Column>
          <Container onClick={(e) => e.stopPropagation()}>
            <Head>
              <Title>Details</Title>
              <CloseButton onClick={close}>
                <IoCloseOutline color='#191919' fill />
              </CloseButton>
            </Head>
            <List>
              <Row head>
                <Item>Pizza</Item>
                <Item>Size</Item>
                <Item>Count</Item>
              </Row>
              {data?.map((item, id) => (
                <Row key={id}>
                  <Item>{item.name}</Item>
                  <Item>{item.size}</Item>
                  <Item>{item.count}</Item>
                </Row>
              ))}
            </List>
          </Container>
        </Column>
      </Wrapper>
    </Modal>
  );
};

export default DetailsOrder;
