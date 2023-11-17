import { useState } from "react";
import axios from "axios";
import "../pages/login.css";
import { useNavigate } from "react-router-dom";

function AddService({ getAllServices }) {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [service, setService] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setService({
      ...service,
      [e.target.name]: value,
    });
  };

  //Function to validate the form
  const validForm = () => {
    return (
      service.title.trim() !== "" &&
      service.description.trim() !== "" &&
      service.price.trim() !== ""
    );
  };

  function addNewService(e) {
    e.preventDefault();
    if (!validForm()) {
      alert("Please fill in all fields.");
      return;
    }

    axios
      .post("http://localhost:8000/create", service, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        getAllServices();
        navigate("/");
      })

      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="formContainer">
      <div className="inputDiv">
        <form className="card" onSubmit={addNewService}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            onChange={handleInputChange}
            value={service.title}
          />
        
          <label>Description:</label>
          <input
            type="text"
            name="description"
            placeholder="description...."
            onChange={handleInputChange}
            value={service.description}
          />
          <label>Price:</label>
          <input
            type="text"
            name="price"
            placeholder="price..."
            onChange={handleInputChange}
            value={service.price}
          />
          <button type="submit" className="addProductBtn">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddService;