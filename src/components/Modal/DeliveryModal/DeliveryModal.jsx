import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pickup from "./Pickup/Pickup";
import { addDelivery } from "../../../redux/slices/basketSlice";
import styles from "./DeliveryModal.module.css";
import { useDispatch } from "react-redux";

function Example() {
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState("Доставка:");
  const [deliveryPoint, setDeliveryPoint] = useState("delivery");
  const [show, setShow] = useState(false);
  const [pickup, setPickup] = useState("Доставка:");

  const clickHandler = (deliveryData) => {
    setDeliveryPoint(deliveryData);
    if (deliveryData === "pickup") {
      setDelivery("Самовывоз:");
    } else {
      setDelivery("Доставка:");
    }
  };

  const onClickPointValue = (newValue) => {
    if (newValue !== "delivery") {
      setPickup(delivery + newValue);
    } else {
      setPickup("Доставка:");
    }
  };

  const addPickupAndDelivery = (newPoint) => {
    dispatch(addDelivery(pickup));
  };

  const handleClose = () => {
    addPickupAndDelivery();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const formDelivery =
    deliveryPoint === "delivery" ? (
      <></>
    ) : (
      <Pickup onValueChange={onClickPointValue} />
    );

  return (
    <>
      <Button
        className={styles.btnPrimary}
        variant="primary"
        onClick={handleShow}
      >
        Launch demo modal
      </Button>

      <Modal
        centered
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        dialogClassName={styles.customModal}
      >
        <Modal.Body className={styles.body}>
          <div className={styles.formDelivery}>
            <div className={`${styles.orderTypeToggle} `}>
              <div>
                <input
                  id="delivery"
                  name="delivery"
                  type="radio"
                  className={styles.radioInput}
                  onClick={() => {
                    clickHandler("delivery");
                    onClickPointValue("delivery");
                  }}
                  defaultChecked
                />
                <label
                  htmlFor="delivery"
                  className={`${styles.radioLabel} ${styles.active}`}
                >
                  Доставка
                </label>
                <input
                  id="pickup"
                  name="delivery"
                  type="radio"
                  className={styles.radioInput}
                  onClick={() => clickHandler("pickup")}
                />
                <label htmlFor="pickup" className={styles.radioLabel}>
                  Самовывоз
                </label>
              </div>
            </div>
            {formDelivery}
            <hr />
            <h2>
              При выборе опции "Самовывоз", некоторые блюда могут быть
              недоступны
            </h2>
          </div>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button
            className={styles.btn}
            variant="primary"
            onClick={handleClose}
          >
            Продолжить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
