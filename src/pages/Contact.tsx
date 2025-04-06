
import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  React.useEffect(() => {
    document.title = "Portfolio | Contact";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-20 relative overflow-hidden">
          <div className="grid-background"></div>
          
          <div className="container relative z-10">
            <div className="text-reveal-container mb-12">
              <h1 className="text-4xl md:text-5xl font-mono font-bold">
                <span className="text-reveal">GET</span>{" "}
                <span className="text-reveal">IN</span>{" "}
                <span className="text-reveal">TOUCH</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl text-reveal-container">
                <span className="text-reveal">
                  Have a project in mind or just want to say hello? Feel free to reach out!
                </span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h2 className="text-2xl font-mono font-bold">Contact Information</h2>
                  <p className="text-muted-foreground">
                    I'm always open to new opportunities and collaborations.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-full text-purple-500">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-purple-500 transition-colors">
                        hello@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-full text-purple-500">
                      <Github size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple-500 transition-colors">
                        github.com/username
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-full text-purple-500">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple-500 transition-colors">
                        linkedin.com/in/username
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-mono text-lg font-bold mb-4">Current Status</h3>
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                      <span>Available for freelance work</span>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      I'm currently taking on selected freelance projects.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border p-6 rounded-lg shadow-sm animate-fade-in">
                <h2 className="text-2xl font-mono font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-mono px-6 py-3 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
