import ContactForm from "./../../combonents/ui/ContactForm";

const Contact = () => {
  return (
    <div>
      <section className="py-20  ">
        <div className="container m-auto px-6 ">
          <h2 className="text-4xl md:text-5xl text-yellow-primary mb-4">
            Connect with Bazooka
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 m-auto">
            <div className=" p-8 rounded-3xl shadow-2xl">
              <p className=" mb-8 text-lg">
                Love our explosive chicken? Have a special request? Want to join
                our team? We're all ears and ready to make your Bazooka
                experience even better!
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
