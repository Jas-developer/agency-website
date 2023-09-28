const Question1 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>What is the purpose of the website</span>
      <span>
        Understanding the primary goal of the website will guide the entire
        design and development process.
      </span>
    </div>
  );
};

const Question2 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>Who is your target audience?</span>
      <span>
        Knowing the demographics and preferences of the target audience will
        help tailor the website to their needs.
      </span>
    </div>
  );
};

const Question3 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>
        Do you have any specific design preferences or existing branding
        guidelines?
      </span>
      <span>
        This could include colors, fonts, logos, and any existing design assets.
      </span>
    </div>
  );
};

const Question4 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>What features and functionality do you want on the website? </span>
      <span>
        List out the specific features you need, such as e-commerce, contact
        forms, user registration, etc.
      </span>
    </div>
  );
};

const Question5 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>
        Do you have any examples of websites you like or want to emulate?
      </span>
      <span>
        Providing examples can help the designer understand the style you
        prefer.
      </span>
    </div>
  );
};

const Question6 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>What content will be on the website?</span>
      <span>
        Ask about the type of content, such as text, images, videos, and whether
        you have this content ready or need assistance creating it.
      </span>
    </div>
  );
};

const Question7 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>Do you have a timeline or deadline for the project?</span>
      <span>
        Understanding the timeframe helps with project planning and scheduling.
      </span>
    </div>
  );
};

const Question8 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>What is your budget for the website project?</span>
      <span>
        Knowing the budget constraints will help in determining what can be
        accomplished within those limitations.
      </span>
    </div>
  );
};

const Question9 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>Will the website need to be mobile-responsive? </span>
      <span>
        It's essential to ensure the website functions well on various devices
        and screen sizes.
      </span>
    </div>
  );
};
const Question10 = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <span>
        How do you plan to maintain and update the website after it's launched?
      </span>
      <span>
        Discuss plans for ongoing maintenance, content updates, and whether you
        need assistance with these tasks.
      </span>
    </div>
  );
};

const Finish = () => {
  return (
    <div className="flex flex-col text-gray-100">
      <h1>
        Thank you for answering our questions please tell us your email so we
        can send a schedule for a final consoltuation via zoom.
      </h1>
      <span>
        We will discuss of how we can provide you a business solutions and for
        the final amount and about how long will going to finish the project.
      </span>
    </div>
  );
};

export {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Finish,
};
