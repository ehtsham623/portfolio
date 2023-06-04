import Image from "next/image";

function About() {
  return (
    <>
      <div className="flex flex-row h-full justify-center items-center ">
        <Image
          src={"/eht.png"}
          alt="Picture of the author"
          className=" rounded-lg"
          width={320}
          height={320}
        />
        <div>
          <div>ehtsham ul haq</div>
          <div>software engineer</div>
        </div>
      </div>
    </>
  );
}

export default About;
