function ContactView(){
    return(
        <>
      <h1 className="text-5xl text-center mt-10 mb-3"> Contact Me ! </h1>
      <h3 className="text-2xl text-center">
      Inquiries? Photography related Work? Just want to say hello?</h3> 
     <h3 className="text-2xl text-center">Use the form below or send me an email <a className="text-blue-600 hover:text-blue-800" href="mailto:dummy@email.com">here</a></h3> 
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="grid p-16 items-center text-center justify-center gap-5">
          <input className="border border-gray-400/60 rounded-sm w-[352px] h-10 pl-2"
            placeholder="Name"
          ></input>
          <input className="border border-gray-400/60 rounded-sm w-[352px] h-10 pl-2"
            placeholder="Email"
          ></input>
          <textarea className="border border-gray-400/60 rounded-sm w-[352px] mb-4 pl-2"
            rows={7}
            placeholder="Message"
          ></textarea>
          <button className="fancy mb-[26px]" href="#">
            <span className="top-key"></span>
            <span className="text">Send</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </div>
      </form>
    </>
    )
}

export default ContactView