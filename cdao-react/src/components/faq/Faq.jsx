import React from 'react';
import './faq.css';

const Faq = () => {
  return (
    <div>
      <div className="faq-container" id="faqs">
        <div className="faq-title highlight-text-light">Frequently Asked Questions</div>
        <div className="faq-row">
          <div className="faq-box">
            <h3><i className="fas fa-cogs"></i> What is <u>C</u>DAO?</h3>
            <p>CDAO or College DAO is a group of BTech students at NIT Jalandhar dedicated to promoting Web3.0 and Blockchain culture within our college and the region around. We are passionate about exploring the potential of decentralized technologies and creating awareness among our fellow students.</p>
            <div className="faq-box-backdrop"><i className="fas fa-cogs"></i></div>
          </div>
          <div className="faq-box">
            <h3><i className="fas fa-seedling"></i> What is our mission?</h3>
            <p>Our mission is to foster a culture of innovation, collaboration, and knowledge sharing around Web3.0 and Blockchain. We aim to empower students with the understanding and skills necessary to navigate the decentralized future and leverage emerging technologies effectively.</p>
            <div className="faq-box-backdrop"><i className="fas fa-seedling"></i></div>
          </div>
          <div className="faq-box">
            <h3><i className="fas fa-puzzle-piece"></i> How do we plan to achieve our goals?</h3>
            <p>In the future, we aim to expand our network, establish partnerships with more leading Blockchain technologies, and host larger-scale events to create a vibrant ecosystem of innovation and learning around Web3.0.</p>
            <div className="faq-box-backdrop"><i className="fas fa-puzzle-piece"></i></div>
          </div>
          <div className="faq-box">
            <h3><i className="fas fa-rocket"></i> What benefits does <u>C</u>DAO offer to students?</h3>
            <p>CDAO offers a platform for students to learn, explore, and experiment with Blockchain and Web3.0 technologies. By participating in our activities, students can enhance their technical skills, network with industry experts, and stay updated on the latest developments in the decentralized space.</p>
            <div className="faq-box-backdrop"><i className="fas fa-rocket"></i></div>
          </div>
          <div className="faq-box">
            <h3><i className="fas fa-hands-helping"></i> How can students get involved with <u>C</u>DAO?</h3>
            <p>Students can get involved with CDAO by attending our events, joining our workshops, and participating in collaborative projects. We welcome students from all disciplines and backgrounds who are interested in learning about Blockchain, Web3.0, and decentralized technologies.</p>
            <div className="faq-box-backdrop"><i className="fas fa-hands-helping"></i></div>
          </div>
          <div className="faq-box">
            <h3><i className="fas fa-globe"></i> How can <u>C</u>DAO contribute to NITJ and its student community?</h3>
            <p>CDAO can contribute to the college and student community by organizing educational events, creating networking opportunities with industry professionals, fostering innovation and research projects, and serving as a platform for students to collaborate and share knowledge about Blockchain and Web3.0.</p>
            <div className="faq-box-backdrop"><i className="fas fa-globe"></i></div>
          </div>
          <div className="faq-box">
            <h3><i className="fas fa-brain"></i> Are there any prerequisites or technical background required to join <u>C</u>DAO?</h3>
            <p>No specific prerequisites or technical background is required to join CDAO. We welcome students from all disciplines and levels of expertise who have an interest in learning and exploring Blockchain and Web3.0 technologies. Our activities cater to both beginners and those with prior knowledge in the field.</p>
            <div className="faq-box-backdrop"><i className="fas fa-brain"></i></div>
          </div>
          <div className="faq-box">
            <h3><i className="fas fa-chart-line"></i> What are our future plans?</h3>
            <p>In the future, we aim to expand our network, establish partnerships with more leading Blockchain technologies, and host larger-scale events to create a vibrant ecosystem of innovation and learning around Web3.0.</p>
            <div className="faq-box-backdrop"><i className="fas fa-chart-line"></i></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
