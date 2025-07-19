import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Terminal,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
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

  const fullText = "Let's Connect & Build Something Amazing";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [typedText, fullText]);

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
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

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

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    const newHistory = [
      ...terminalHistory,
      "$ ./send_message.sh --execute",
      "Validating input parameters...",
      "Establishing secure connection...",
      "Sending message...",
    ];
    setTerminalHistory(newHistory);

    // Simulate API call
    setTimeout(() => {
      setTerminalHistory((prev) => [
        ...prev,
        "✓ Message sent successfully!",
        "Connection closed.",
        "Thank you for reaching out. I'll get back to you soon!",
        "",
      ]);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 3000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitStep();
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setCurrentStep(0);
    setIsSubmitted(false);
    setShowForm(false);
    setTerminalHistory([
      "$ ./contact_form.sh --init",
      "Contact form initialized...",
      "Ready to accept input parameters.",
      "",
    ]);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Floating code snippets background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {
              [
                "curl -X POST",
                "fetch()",
                "axios.post",
                "sendmail",
                "smtp.send",
                "POST /contact",
                "form.submit",
                "validate()",
                "response.json",
                "await send",
              ][Math.floor(Math.random() * 10)]
            }
          </div>
        ))}
      </div>

      {/* Matrix-style background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="bg-gray-900 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-2 font-mono">
                ~/contact
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="text-green-400 font-mono text-sm mb-4">
                <span className="text-cyan-400">$</span> echo "Initializing
                contact interface..."
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-mono">
                <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                  {typedText}
                </span>
                {isTyping && (
                  <span className="animate-pulse text-green-400">|</span>
                )}
              </h2>
            </div>

            <div className="text-center">
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> cat welcome_message.txt
              </div>
              <p className="text-gray-300 font-mono text-lg mb-6 leading-relaxed">
                Ready to collaborate on exciting projects, discuss
                opportunities,
                <br />
                or just have a tech conversation? Let's connect!
              </p>

              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> ./start_conversation.sh
              </div>

              {/* Animated Contact Button */}
              <button
                onClick={() => setShowForm(!showForm)}
                className="group relative bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-black px-8 py-4 rounded-lg font-mono font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Terminal className="w-5 h-5 group-hover:animate-bounce" />
                  {showForm ? "./close_form.sh" : "./open_contact_form.sh"}
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-black rounded-full animate-pulse delay-100"></div>
                    <div className="w-1 h-1 bg-black rounded-full animate-pulse delay-200"></div>
                  </div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              <div className="text-gray-400 font-mono text-xs mt-3">
                Status: {showForm ? "Form Active" : "Ready to Initialize"} |
                Press to {showForm ? "close" : "start"}
              </div>
            </div>
          </div>
        </div>


        <div
          className={`max-w-6xl mx-auto transition-all duration-700 transform ${
            showForm
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95 pointer-events-none"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-green-500/30 rounded-lg shadow-2xl">
              <div className="flex items-center gap-2 p-4 border-b border-green-500/20">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2 font-mono">
                  ~/contact/send_message.sh
                </span>
              </div>

              <div className="p-6">
                
                <div
                  ref={terminalRef}
                  className="bg-black rounded p-4 h-64 overflow-y-auto mb-4 border border-gray-700"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
