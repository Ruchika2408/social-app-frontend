// StyledModal.js
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCurrentAdvertisement } from "../../store/advertisementSlice";
import createAdvertisement from "../../services/createAdvertisement";

const AdvertisementModal = ({ open, handleClose, fetchData }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const currentAdvertisement = useSelector(
    (state) => state.advertisementData.currentAdvertisement
  );
  const [advertise, setAdvertise] = useState({
    ...currentAdvertisement,
    email: user.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdvertise({ ...advertise, [name]: value });
  };

  const handleCreateAdvertise = async () => {
    const advertiseData = { ...advertise, time: new Date(), email: user.email };
    dispatch(setCurrentAdvertisement(advertiseData));
    const response = await createAdvertisement(advertiseData);
    handleClose();
    if (response.code === "advertisementCreated") {
      toast("Advertisement Added.");
      fetchData();
    }
  };

  const handleCancel = () => {
    handleClose();
    setAdvertise({
      email: user.email,
      title: "",
      description: "",
      imgUrl: "",
      time: "",
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="boxContainer">
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          value={advertise.title}
          onChange={handleInputChange}
        />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          value={advertise.description}
          onChange={handleInputChange}
        />
        <TextField
          name="imgUrl"
          label="Image Url"
          variant="outlined"
          value={advertise.imgUrl}
          onChange={handleInputChange}
        />
        <div className="buttonsContainer">
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleCreateAdvertise}>
            Submit
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AdvertisementModal;
