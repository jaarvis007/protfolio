import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Terminal,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  X,
  PhoneCall,
  MessageCircle,
  Code2
} from "lucide-react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "$ ./contact_form.sh --init",
    "Contact form initialized...",
    "Ready to accept input parameters.",
    "",
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const fullIntroText = "Let's Connect & Build Something Amazing";

  // IMPORTANT: Replace 'YOUR_WEB3FORMS_ACCESS_KEY' with your actual Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = 'b8620165-191d-4a69-831e-9375c15646e3';

  useEffect(() => {
    if (!isModalOpen && typedText.length < fullIntroText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullIntroText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isModalOpen && typedText !== fullIntroText) {
      setTypedText(fullIntroText);
      setIsTyping(false);
    } else if (!isModalOpen && typedText === fullIntroText) {
      setIsTyping(false);
    }
  }, [typedText, fullIntroText, isModalOpen]);

  const steps = [
    {
      field: "name",
      prompt: "Enter your name",
      command: "--name",
      type: "text",
      icon: <User className="w-4 h-4" />,
    },
    {
      field: "email",
      prompt: "Enter your email address",
      command: "--email",
      type: "email",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      field: "subject",
      prompt: "Enter message subject",
      command: "--subject",
      type: "text",
      icon: <MessageSquare className="w-4 h-4" />,
    },
    {
      field: "message",
      prompt: "Enter your message",
      command: "--message",
      type: "textarea",
      icon: <MessageSquare className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep, isModalOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleInputChange = (value: string) => {
    const currentField = steps[currentStep].field as keyof typeof formData;
    setFormData((prev) => ({
      ...prev,
      [currentField]: value,
    }));
  };

  const handleSubmitStep = () => {
    const currentField = steps[currentStep].field as keyof typeof formData;
    const value = formData[currentField];

    if (!value.trim()) return;

    const newHistory = [
      ...terminalHistory,
      `$ ./contact_form.sh ${steps[currentStep].command} "${value}"`,
      `✓ ${steps[currentStep].field}: ${value}`,
      "",
    ];

    setTerminalHistory(newHistory);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinalSubmit();
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setTerminalHistory((prev) => [
      ...prev,
      "$ ./send_message.sh --execute",
      "Validating input parameters...",
      "Establishing secure connection...",
      "Sending message...",
    ]);

    // Prepare FormData for Web3Forms
    const web3formsFormData = new FormData();
    web3formsFormData.append("access_key", WEB3FORMS_ACCESS_KEY);
    web3formsFormData.append("name", formData.name);
    web3formsFormData.append("email", formData.email);
    web3formsFormData.append("subject", formData.subject);
    web3formsFormData.append("message", formData.message);

    try {
      

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3formsFormData,
      });

      const data = await response.json();

      if (data.success) {
        setTerminalHistory((prev) => [
          ...prev,
          "✓ Message sent successfully!",
          "Connection closed.",
          "Thank you for reaching out. I'll get back to you soon!",
          "",
        ]);
        setIsSubmitted(true);
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          `✗ Error: ${data.message || 'Failed to send message.'}`,
          "Connection closed.",
          "Please try again later.",
          "",
        ]);
      }
    } catch (error) {
      setTerminalHistory((prev) => [
        ...prev,
        `✗ Network Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        "Connection closed.",
        "Please check your internet connection and try again.",
        "",
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && !isSubmitting && !isSubmitted) {
      e.preventDefault();
      handleSubmitStep();
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setCurrentStep(0);
    setIsSubmitted(false);
    setIsModalOpen(false);
    setTypedText("");
    setIsTyping(true);
    setTerminalHistory([
      "$ ./contact_form.sh --init",
      "Contact form initialized...",
      "Ready to accept input parameters.",
      "",
    ]);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Removed Floating code snippets background */}
      {/* Removed Matrix-style background */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Contact Heading - Consistent with Skills/About */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-4 text-green-400 animate-fade-in"
              style={{
                textShadow: '8px 8px 0px #000000, 16px 16px 0px #166534'
              }}>
            CONTACT
          </h2>
          <p className="text-green-300 max-w-2xl mx-auto text-xl font-semibold">
            Let's connect and build something amazing.
          </p>
        </div>

        <div className="text-center mb-12">
          {/* Animated Contact Button - Opens Modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-black px-8 py-4 rounded-lg font-mono font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Terminal className="w-5 h-5 group-hover:animate-bounce" />
              ./open_contact_form.sh
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-black rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-black rounded-full animate-pulse delay-200"></div>
              </div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <div className="text-gray-400 font-mono text-xs mt-3">
            Status: {isModalOpen ? "Form Active" : "Ready to Initialize"} |
            Press to {isModalOpen ? "close" : "start"}
          </div>
        </div>

        {/* Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
            {/* Modal Content */}
            <div
              className={`relative bg-gray-950 border border-green-500/30 rounded-lg shadow-2xl p-6 max-w-2xl w-full mx-4 transition-all duration-300 transform ${
                isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close form"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-2 p-4 border-b border-green-500/20 -mx-6 -mt-6 mb-6 rounded-t-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2 font-mono">
                  ~/contact/send_message.sh
                </span>
              </div>

              <div className="p-0">
                {/* Contact Image/Icon */}
                <div className="flex justify-center mb-6 space-x-4">
                  <PhoneCall className="w-24 h-24 text-green-500 animate-pulse" />
                  <MessageCircle className="w-24 h-24 text-cyan-500 animate-pulse delay-200" />
                </div>

                <div
                  ref={terminalRef}
                  className="bg-black rounded p-4 h-64 overflow-y-auto mb-4 border border-gray-700 custom-scrollbar"
                >
                  {terminalHistory.map((line, index) => (
                    <div key={index} className="font-mono text-sm mb-1">
                      {line.startsWith("$") ? (
                        <span className="text-green-400">{line}</span>
                      ) : line.startsWith("✓") ? (
                        <span className="text-green-300">{line}</span>
                      ) : line.startsWith("Validating") ||
                        line.startsWith("Establishing") ||
                        line.startsWith("Sending") ? (
                        <span className="text-yellow-400">{line}</span>
                      ) : (
                        <span className="text-gray-300">{line}</span>
                      )}
                    </div>
                  ))}

                  {isSubmitting && (
                    <div className="flex items-center gap-2 text-yellow-400 font-mono text-sm">
                      <div className="animate-spin w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
                      Processing...
                    </div>
                  )}
                </div>

                {/* Input Area */}
                {!isSubmitted && !isSubmitting && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                      {steps[currentStep].icon}
                      <span>{steps[currentStep].prompt}:</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-mono">$</span>
                      <span className="text-green-400 font-mono text-sm">
                        ./contact_form.sh {steps[currentStep].command}
                      </span>
                    </div>

                    {steps[currentStep].type === "textarea" ? (
                      <textarea
                        ref={inputRef as any}
                        value={
                          formData[
                            steps[currentStep].field as keyof typeof formData
                          ]
                        }
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full bg-gray-800 text-green-300 font-mono text-sm p-3 rounded border border-gray-700 focus:border-green-500 focus:outline-none resize-none"
                        rows={4}
                        placeholder="Type your message here..."
                      />
                    ) : (
                      <input
                        ref={inputRef}
                        type={steps[currentStep].type}
                        value={
                          formData[
                            steps[currentStep].field as keyof typeof formData
                          ]
                        }
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full bg-gray-800 text-green-300 font-mono text-sm p-3 rounded border border-gray-700 focus:border-green-500 focus:outline-none"
                        placeholder={`Enter ${steps[currentStep].field}...`}
                      />
                    )}

                    <div className="flex items-center gap-4">
                      <button
                        onClick={handleSubmitStep}
                        disabled={
                          !formData[
                            steps[currentStep].field as keyof typeof formData
                          ].trim()
                        }
                        className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-black px-6 py-2 rounded font-mono text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        {currentStep === steps.length - 1
                          ? "Send Message"
                          : "Next"}
                      </button>

                      <div className="text-gray-400 font-mono text-xs">
                        Step {currentStep + 1} of {steps.length} | Press Enter
                        to continue
                      </div>
                    </div>
                  </div>
                )}

                {/* Success State */}
                {isSubmitted && (
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2 text-green-400">
                      <CheckCircle className="w-8 h-8" />
                      <span className="font-mono text-lg">
                        Message Sent Successfully!
                      </span>
                    </div>
                    <button
                      onClick={resetForm}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-mono text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
                    >
                      <Terminal className="w-4 h-4" />
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Declare window.emailjs for TypeScript
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceID: string, templateID: string, templateParams: Record<string, unknown>) => Promise<any>;
    };
  }
}

export default Contact;
