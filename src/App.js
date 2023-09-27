import logo from './logo.svg';
import './App.css';
import Random from './componenets/Random';
import Tag from './componenets/Tag';


export default function App() {
  return (

    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center pt-10">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-10px
       px-10 py-2 text-4xl font-bold ">
      RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">

        <Random/>
        <Tag/>
      </div>
   
    </div>
  );
}


