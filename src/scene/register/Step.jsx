const Step = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Patient Details" },
    { id: 2, name: "Assign Resources" },
    { id: 3, name: "Doctor Test Report" },
  ];

  return (
    <div className="flex items-center justify-center mt-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`flex items-center rounded-full p-2 ${
              currentStep === step.id ? "bg-[#848D5E]" : "bg-white"
            }`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full 
              text-sm font-bold ${
                currentStep === step.id
                  ? "bg-[#575F4A] text-white"
                  : "bg-[#B4B4B4] text-gray-500"
              }`}
            >
              {step.id}
            </div>

            <div
              className={`ml-2 text-sm font-medium ${
                currentStep === step.id ? "text-white" : "text-gray-500"
              }`}
            >
              {step.name}
            </div>
          </div>

          {index < steps.length - 1 && <hr className="w-20 bg-black border-black" />}
        </div>
      ))}
    </div>
  );
};

export default Step;