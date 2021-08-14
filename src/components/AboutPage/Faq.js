import React, { useState } from "react";
//style
import styled from "styled-components";
//animation
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <StyledFaq>
      <h2 className="title">FAQs</h2>
      <div className="section">
        <h3>How it works</h3>

        <div className="qnas-container">
          <QnA
            question="How do I download the app?"
            answer="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores.
                  An even simpler way to do it would be to click the relevant link at the bottom of this
                  page and you’ll be re-directed to the correct page."
          />
          <QnA
            question="Can I find a nearby Scoots?"
            answer="Definitely! Simply open up the app and allow us to find your location while using it. We'll
                  show you all of the closest Scoots and some extra useful information. "
          />
          <QnA
            question="Do I need a license to ride?"
            answer="Yup! We provide information inside the app regarding local laws and the license you need to be
                  able to ride our Scoots."
          />
        </div>
      </div>
      <div className="section">
        <h3>Safe driving</h3>
        <div className="qnas-container">
          <QnA
            question="Should I wear a helmet?"
            answer="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend
                always wearing a helmet regardless of the local laws. We like you and we want you to be as
                safe as possible while Scooting."
          />
          <QnA
            question="How about the rules & regulations?"
            answer="Now is not the time to be a rule breaker. Be sure you're complying with all local laws and
                regulations. Also, just be a good human being. Be sure not to park your Scoot where it can
                block access to buildings or get in people's way."
          />
          <QnA
            question="What if I damage my Scoot?"
            answer="Be sure to read our terms and conditions carefully. Not the most fun job we know but we make
                it as clear as possible. There's an option to add insurance for each trip, or you can sign
                up for annual insurance if you're a regular Scooter."
          />
        </div>
      </div>
    </StyledFaq>
  );
};

const QnA = ({ question, answer }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <StyledQnA onClick={() => setIsToggle(!isToggle)}>
      <div className="question">
        <h4>{question}</h4>
        <svg
          style={isToggle ? { transform: "rotate(180deg)" } : {}}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
        >
          <path fill="none" stroke="#FCB72B" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </div>

      {isToggle && (
        <motion.p
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          {answer}
        </motion.p>
      )}
    </StyledQnA>
  );
};

const StyledFaq = styled.div`
  padding: 0 165px 160px 165px;
  .title {
    text-align: center;
  }
  .section {
    display: flex;
    justify-content: space-between;
    padding-top: 64px;
  }

  //tablet
  @media (max-width: 1270px) {
    padding: 0 40px 120px 40px;
    .section {
      flex-direction: column;
      align-items: center;

      h3 {
        padding-bottom: 32px;
      }
    }
  }
  @media (max-width: 830px) {
    .section {
      .qnas-container {
        width: 100%;
      }
    }
  }

  //mobile
  @media (max-width: 495px) {
    .section {
      h3 {
        font-size: 24px;
      }
    }
  }
`;

const StyledQnA = styled(motion.div)`
  background-color: #f2f5f9;
  padding: 32px 40px;
  width: 732px;
  max-width: 100%;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #fff4df;
  }

  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h4 {
      width: 90%;
      width: 90%;
      font-size: 18px;
    }
  }

  p {
    padding-top: 24px;
    max-width: 100%;
  }
  //tablet
  @media (max-width: 830px) {
    width: 100%;
  }

  //mobile
  @media (max-width: 495px) {
    padding: 32px 28px 32px 32px;
  }
`;
export default Faq;
