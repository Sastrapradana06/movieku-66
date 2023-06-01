
import "./App.css";
import BtnMovie from "./Components/Btn-Movie";
import CardMovie from "./Components/Card-Movie";
import SearchMovie from "./Components/Seacrh-Movie";

export function App() {
  return (
        <div className=" w-full h-max relative">
          <div className=" judul m-auto text-center">
            <h1 className="text-[1.5rem] font-mono lg:text-[1.8rem] font-judul">MovieKu</h1>
          </div>
          <SearchMovie />
          <BtnMovie />
          <CardMovie />
        </div>
    );
}

