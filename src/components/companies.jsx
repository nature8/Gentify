import assets from '../assets/assets.js'
const Companies = () => {
  return (
    <div className="mt-20 text-center">
    <p className="text-gray-500 text-lg mb-10">Trusted by 2 million+ teams</p>

    <div className="flex  flex-wrap justify-center lg:grid-cols-5  md:gap-8 lg:gap-10   sm:gap-4 items-center gap-10 opacity-60 ">
      <div className="flex items-center space-x-2">
        <img src={assets.Medium} alt="Medium" className="h-8" />
        <span>Medium</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.Mailchimp} alt="Mailchimp" className="h-8" />
        <span>Mailchimp</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.Evernote} alt="Evernote" className="h-8" />
        <span>Evernote</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.Dropbox} alt="Dropbox" className="h-8" />
        <span>Dropbox</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.Microsoft} alt="Microsoft" className="h-8"  />
        <span>Microsoft</span>
      </div>
    </div>
  </div>
);
};

export default Companies;