import "./Aovivo.css"
import React, { useEffect } from "react";

function Live(){
  useEffect(() => {
  
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

  
    const elements = document.querySelectorAll(".rolagem");
    elements.forEach((element) => myObserver.observe(element));

    return () => {
        elements.forEach((element) => myObserver.unobserve(element));
    };
}, []); 
    return(
        
    <main className="rolagem">
      <div className="container">
        <h1 className="h1">Transmissão Ao Vivo</h1>
        <div id="live-stream" className="live-stream">
          <iframe 
            id="live-video" 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="h2">Outras Corridas/Outros Vídeos</h2>
        <div id="videos" className="video-list">
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/ZUTiqPcJMj8?si=qNQLbqUPE-mLqFvC&amp;start=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/wPtoSGoDGG0?si=GOep-wf2_Sbxvm6r" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/-LSXZ0xLgRM?si=vxksuyonk_xO-VoK" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/i0gxQ-4pKAs?si=PwntgnAxMQBvbMsS&amp;start=3" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/FLMLjZyTeZ8?si=IGhpJF5WK9oE9gFA" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Live;
