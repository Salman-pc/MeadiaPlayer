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
    <>
      <div className="container my-5 px-4">
        {/* Header Section */}
        <div className="my-5 d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bold">Watch History</h4>
          </div>
          <div>
            <Link
              to="/home"
              className="text-decoration-none fw-bold text-white fs-5"
            >
              <span>Back to </span>
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
        </div>

        {/* History Items Section */}
        <div className="mt-5">
          {allhistory?.length > 0 ? (
            allhistory.map((item, index) => (
              <Row
                key={index}
                className="d-flex align-items-center border p-2 mb-3"
              >
                {/* Image Section */}
                <Col xs={4} sm={3} md={2} className="d-flex justify-content-center">
                  <a href={item.youtubeUrl}>
                    <img
                      className="img-fluid rounded"
                      src={item.imageurl}
                      alt={item.caption}
                      
                    />
                  </a>
                </Col>

                {/* Video Info Section */}
                <Col xs={8} sm={6} md={8} className="d-flex flex-column">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white w-100 d-flex flex-column justify-content-around text-decoration-none fw-bold"
                    href={item.youtubeUrl}
                  >
                    {item.caption}
                    <span className="text-white small w-100 overflow-hidden " >{item.youtubeUrl}</span>
                  </a>
                  
                </Col>

                {/* Action Section */}
                <Col xs={12} sm={3} md={2} className="text-end">
                  <div className="text-white">
                    <span>{item.formatingdetails}</span>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => handleDeleteHistory(item?.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </Col>
              </Row>
            ))
          ) : (
            <div className="text-center text-white">
              <h5>No history available</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default History;
