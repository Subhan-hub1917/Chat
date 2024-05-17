import React from 'react';
import { useNavigate } from 'react-router-dom';

function CallComponent(props) {
  const {chatid}=props
  const navigate = useNavigate();

  const handleRoom = (event) => {
    event.preventDefault(); // Prevent default form submission if wrapped in a form
    navigate(`/VideoPage/${chatid}`);
  };

  return (
    <div className="text-center ms-5">
            <button className='btn btn-outline-light'> 
                <i className='bi bi-camera-video-fill ' onClick={handleRoom}>Start Call</i>
            </button>
    </div>
  );
}

export default CallComponent;
