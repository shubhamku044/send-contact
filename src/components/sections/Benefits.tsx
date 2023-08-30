import Image from 'next/image';

const Benefits = () => {
  return (
    <>
      <div
        style={{
          background: 'linear-gradient(180deg, #242E3D 0%, #161B23 100%)'
        }}
        className=""
      >
        <div
          className="section"
        >
          <h2 className="text-center text-5xl text-white">
            Who Can Benefit From&nbsp;
            <span className="text-custom-blue">SendContact?</span>
          </h2>
          <p className="text-white text-lg text-center mt-4 md:mt-6">
            At Send Contact, we have developed a powerful and versatile application
            designed to cater to a wide range of users. Our app offe
            and benefits that can be of great value to various entities and individuals.
            Here are the primary groups that can benefit from using our app:
          </p>
        </div>
      </div>
      <div>
        <div className="section gap-8 flex flex-col md:flex-row items-center">
          <div
            className=""
            style={{
              flex: 1
            }}
          >
            <h3 className="text-custom-blue text-4xl font-semibold">1. Businesses:</h3>
            <span className='h-1 bg-custom-blue w-36 mt-4 inline-block rounded' />
            <div className='mt-4 flex flex-col gap-4'>
              <p>
                Create your virtual card, upload your products and services, set up your shop,
                and start connecting, presenting, and selling with ease.
              </p>
              <p>
                Imagine you are at a trade show, and anyone walking by your booth will instantly
                see your virtual card and catalog popping up on their phones without the need for
                any salesperson handing out physical catalogs. Alternatively, you&apos;re at a
                networking event, and by simply turning on your SendContact app, you can view a
                popup listing the closest person to you, and with a quick scroll, you can see each
                person&apos;s business profile before selecting the relevant individuals that fit
                your industry. With our powerful &quot;publish my card&quot; feature, one click sends your card
                to everyone in the vicinity, and you can focus on what you do best, whether it&apos;s
                networking or enjoying the event. Others can accept or deny your card instantly or
                decide later, saving you time and enabling you to efficiently connect with those who
                are the best fit for your business.
              </p>
            </div>
          </div>
          <div
            style={{
              flex: 1
            }}
          >
            <div className="relative h-72 sm:h-96 md:h-auto" style={{ aspectRatio: '667/480' }}>
              <Image
                src="/benefits-img/1.png"
                alt="Businesses"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-dark'>
        <div className="section gap-8 flex flex-col-reverse md:flex-row items-center">
          <div
            style={{
              flex: 1
            }}
          >
            <div className="relative h-72 sm:h-96 md:h-auto" style={{ aspectRatio: '667/480' }}>
              <Image
                src="/benefits-img/2.png"
                alt="Businesses"
                fill
              />
            </div>
          </div>
          <div
            className=""
            style={{
              flex: 1
            }}
          >
            <h3 className="text-custom-blue text-4xl font-semibold">2. Schools And Oranizations:</h3>
            <span className='h-1 bg-custom-blue w-36 mt-4 inline-block rounded' />
            <div className='mt-4 flex flex-col gap-4 text-white'>
              <p>
                Streamline communication and collaboration within your educational institution or organization.
                Our app allows you to share content, upload daily tasks for team members or students, and
                securely exchange large files. By reducing reliance on big centralized social media platforms
                like YouTube, Dropbox, or WeTransfer, you can ensure a more private and controlled environment.
              </p>
              <h4 className='font-semibold text-custom-blue text-xl'>For students: Making new friends made simple and easy.</h4>
              <p>
                Imagine you&apos;re in the cafeteria during lunchtime, and you spot a few people you&apos;d like to be
                friends with, but it feels awkward to walk over and introduce yourself. Now, with the SendContact
                app, you can magically &quot;break the ice.&quot; Simply turn on your SendContact app, and you&apos;ll
                be able to see everyone in the room. All you have to do is select the person&apos;s virtual
                card and click &quot;Send,&quot; and you&apos;re ready to make new friends without any pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100'>
        <div className="section gap-8 flex flex-col md:flex-row items-center">
          <div
            className=""
            style={{
              flex: 1
            }}
          >
            <h3 className="text-custom-blue text-4xl font-semibold">3. Individual:</h3>
            <span className='h-1 bg-custom-blue w-36 mt-4 inline-block rounded' />
            <div className='mt-4 flex flex-col gap-4'>
              <p>
                Experience the convenience of easily sharing your contact information with others using our app.
                Keep your personal information private and fre from nnecessary censorship or authority control,
                ensuring your data remains secure and under your control. Moreover, our app features Send Contact
                via Blutooth technology, enabling seamless local communication without the need for internet access.
              </p>
            </div>
          </div>
          <div
            style={{
              flex: 1
            }}
          >
            <div className="relative h-72 sm:h-96 md:h-auto" style={{ aspectRatio: '667/480' }}>
              <Image
                src="/benefits-img/3.png"
                alt="Businesses"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
