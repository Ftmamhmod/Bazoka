const About = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-yellow-primary ">
          About us
        </h2>
        <div className="flex justify-between items-center mb-8">
          <div className="mb-12 ">
            <h3 className="text-2xl font-semibold mb-4 pt-2  pb-2">
              Working hours:
            </h3>
            <div className="space-y-2">
              {[
                "Saturday",
                "Sunday",
                "Monday",
                "Thursday",
                "Wednesday",
                "Tuesday",
                "Friday",
              ].map((day) => (
                <div key={day} className="flex justify-between max-w-xs">
                  <span className="font-medium">{day}:</span>
                  <span>10:00 am - 05:00 am</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4  pt-2  pb-2">
              Delivery:
            </h3>
            <div className="flex justify-between max-w-xs">
              <span className="font-medium">Everyday:</span>
              <span>11 AM - 3 PM</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4  pb-2">
              Payment method:
            </h3>
            <p className="text-lg">Visa | Cash</p>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold mb-2">16455</div>
            <div className="text-xl font-semibold">HOTLINE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
