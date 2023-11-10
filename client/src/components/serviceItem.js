import axios from "axios";
import { useState, useEffect } from "react";
import { InvalidTokenError, jwtDecode } from 'jwt-decode';
import "../pages/services.css";


function ServiceItem({ getAllServices, service }) {
  const [creatorIds, setCreatorIds] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedService, setUpdatedService] = useState({
    title: "",
    description: "",
    price: 0,
  });
  let token = localStorage.getItem("token");

  const decoded = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (decoded) {
      let updatedCreatorIds = service
        .filter((s) => s.creator._id === decoded.id)
        .map((s) => s._id);
      setCreatorIds(updatedCreatorIds);
    }
  }, [decoded, service]);

  // Function to toggle editing mode for a specific service
  const toggleEditing = (id) => {
    setIsEditing(!isEditing);
    // Fetch the current service details and set them in the state
    const currentService = service.find((s) => s._id === id);
    setUpdatedService(currentService);
  };

  async function deleteService(id) {
    const alertDeleteService = window.confirm("Are you sure mate?");
    if (alertDeleteService) {
      try {
        await axios.delete(`http://localhost:8000/services/${id}`);
        getAllServices();
      } catch (error) {
        console.log("delete service", error);
      }
    }
  }

  async function saveServiceChanges(id) {
    try {
      // Send a request to update the service on the server
      await axios.put(`http://localhost:8000/services/${id}`, updatedService);
      console.log("Service updated:", updatedService);
      getAllServices();
      setIsEditing(false); // Disable editing mode
    } catch (error) {
      console.error("Failed to update service:", error);
      // Handle errors here.
    }
  }

  return (
    <div className="container">
      {service.map((s, index) => (
        <div className="block" key={index}>
          <div className="return">
            <h1>{s.title}</h1>
            <h3>{s.creator.email}</h3>
            <img className="image" src={s.imgUrl} alt="img" />
            <p>{s.description}</p>
            <p>{s.price}€</p>

            {token && creatorIds.includes(s._id) && (
              <>
                <button onClick={() => deleteService(s._id)}>
                  <i className="deleteIcon">delete</i>
                </button>
                <button onClick={() => toggleEditing(s._id)}>
                  <i className="updateIcon">update</i>
                </button>
              </>
            )}

            {isEditing && s._id === updatedService._id && (
              <div className="edit-service-form">
                <input
                  type="text"
                  value={updatedService.title}
                  onChange={(e) =>
                    setUpdatedService({ ...updatedService, title: e.target.value })
                  }
                />
                <textarea
                  value={updatedService.description}
                  onChange={(e) =>
                    setUpdatedService({
                      ...updatedService,
                      description: e.target.value,
                    })
                  }
                />
                <input
                  type="number"
                  value={updatedService.price}
                  onChange={(e) =>
                    setUpdatedService({ ...updatedService, price: e.target.value })
                  }
                />
                <button onClick={() => saveServiceChanges(s._id)}>Save</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceItem;