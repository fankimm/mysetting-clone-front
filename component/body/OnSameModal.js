import { Modal } from "antd";
export default function OnSameModal(props) {
  return (
    <Modal
      style={{ top: 0 }}
      width={180}
      visible={props.isModalVisible}
      onCancel={props.handleCancel}
      cancelButtonProps={{ display: "flex" }}
      closeIcon={<div></div>}
      footer={null}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        중복된 항목 입니다.
      </div>
    </Modal>
  );
}
