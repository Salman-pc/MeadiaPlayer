import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { deleteHistoryVideoApi, getHistoryApi } from "../services/allApi";

function History() {
  const [allhistory, setallhistory] = useState([]);

  useEffect(() => {
    getAllhistory();
  }, []);

  const getAllhistory = async () => {
    try {
      const result = await getHistoryApi();
      setallhistory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteHistory = async (videoId) => {
    try {
      await deleteHistoryVideoApi(videoId);
      getAllhistory();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-5 px-4">
      {/* Header Section */}
      <div className=" container my-5 d-flex justify-content-between align-items-center">
        <h3 className="fw-bold fs-5 fs-sm-4">History</h3>
        <Link to="/home" className="text-decoration-none fw-bold text-white fs-5">
          <span>Back to </span>
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>

      {/* History Items Section */}
      <div className="container mt-5">
        {allhistory?.length > 0 ? (
          allhistory.map((item, index) => (
            <Row
              key={index}
              className="d-flex align-items-center border position-relative p-2 mb-3"
            >
              {/* Image Section */}
              <Col xs={3} sm={3} md={2} className="d-flex justify-content-center">
                <a href={item.youtubeUrl}>
                  <img
                    className="img-fluid rounded"
                    src={item.imageurl}
                    alt={item.caption}
                    style={{ height: "60px", width: "100px" }}
                  />
                </a>
              </Col>

              {/* Video Info Section */}
              <Col xs={7} sm={6} md={8} className="d-flex  flex-column">
                <a
                  target="_blank"
                  style={{width:"98%"}}
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none overflow-hidden fw-bold"
                  href={item.youtubeUrl}
                >
                  {item.caption}
                  <span className="text-white small d-block">{item.youtubeUrl}</span>
                </a>
                <span className="text-muted small mt-1">
                  {item.formatingdetails}
                </span>
              </Col>

              {/* Delete Button */}
              <Col xs={2} sm={3} md={2} className="text-end">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteHistory(item?.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </Col>
            </Row>
          ))
        ) : (
          <div className="text-center text-white">
            <h4 className="text-danger">No history available</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
