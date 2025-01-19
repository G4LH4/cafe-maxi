import { useState } from "react";
import "boxicons";
import beansIMG from "./assets/beans.png";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      {/* <header className="flex items-center justify-between px-8 py-4 text-white md:px-32 bg-zinc-900 "> */}
      <header className="flex items-center justify-between px-8 py-4 text-black bg-white md:px-32 ">
        <a href="/">
          <img
            src={beansIMG}
            className="transition-all hover:scale-105 w-14"
            alt=""
          />
        </a>

        <ul className="items-center hidden gap-12 text-base font-semibold xl:flex">
          <li className="p-3 transition-all rounded-md cursor-pointer hover:bg-amber-950 hover:text-white">
            <Link to="/cursos">Cursos</Link>
          </li>
          <li className="p-3 transition-all rounded-md cursor-pointer hover:bg-amber-950 hover:text-white">
            <Link to="/cafes">Cafés en grano</Link>
          </li>
          <li className="p-3 transition-all rounded-md cursor-pointer hover:bg-amber-950 hover:text-white">
            <Link to="/productos">Productos en venta</Link>
          </li>
          <li className="p-3 transition-all rounded-md cursor-pointer hover:bg-amber-950 hover:text-white">
            <Link to="/about">Sobre nosotros</Link>
          </li>

          <li className="p-3 transition-all rounded-md cursor-pointer hover:bg-amber-950">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAn5JREFUWEftlzloVVEQhr+IGxYiqGBMXHAholgFtyCCVm6VoCBW2hiX1sIYgkuhWJhClKTSSkTRyrVQtBBcSiM2Lli4oJ0iLojx/DBXji/vLufcG/OKTPfenX/Od+fMmTm3iQazpgbjYRQob0dqM3TYE3wD7gJP8oJU+bwWaLBO8HPArioXzYpVBEj67cDF/wGVtWXtwGaDeACsHgkgf80ZwFtgjP25FBgYbqi8Y38J2GoQZ4D9Iw20BrhvEJ+B3oqBvgLngU9J3LwMyU/btKRiED+c2sryEKA9wNlhBHrjsjQ3BGgS8B6YbKKrwNOSgDuB2RbjONAVAiTf015BXwa2lQCaAnwExlmMecDrUKD5wAsT/QJmAR8iofYCOrGyh8AqP06Rok787wDr7Idm3pFIoMfAMtN2Av2xQFuAKyZWdlqA34FQi4DnpvkOTAN09P9aSIbUsdW51cFlqiPVU4iddAAHTKDZqBn5j4UASdgNHLMI91zTXBtAoxdSZqebZr2rn9tlgaZa0LEWaAHwsiDURlc71833HdAKDLnuhGZI8S54qVbD3FcQyJ+LJ4CD9XQxQB2AriOyL65hnioIdAhIMrvQayOlaigRPwMWFwSpdRvSe3yHmAxJr9OhrYuxHVnaWKAEqi2QSDMw6WV1pWWAAlmKuccCjXcNss/u3K/cNfeou9PcSFlSx70H0BC95tqGxsXPNLxYIDW1m17QR8DKlEVUxCu8Zxuc762qgZSd3V7QH8DElEU0syZ4zzRMlaVKa6jZ5lqS4axFfHh15plZV5fYLdPbzXGf2ZsA1ZA+udPqQvWma4tqSKNDV9ZUKwNU7NgEeo0C5SWs4TL0B4iRYCVWN1gvAAAAAElFTkSuQmCC" />
          </li>
        </ul>
        <i
          className="block text-5xl bg-white rounded cursor-pointer xl:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAJNJREFUWEftlMEOwCAIQ/XLtz/XmHh0lBUOmNRrFeqj2lux1Yv5aTKEJiJCIoQIIP2qDA10m6B+hGERkqFF/KoMBSPCHRchxI0h9KKiTv1YhzGU9R38/oe+LlrOULmROSPCbWMyxHVynpIhBCqb0Ar8g5puPe3ZW/1kyDkNflt2hngnVrDCVQMFRAjBEyERQgSQPgH4fwolQ+gRqQAAAABJRU5ErkJggg==" />{" "}
        </i>
        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3 ease, opacity 0.3 ease" }}
        >
          <li className="w-full p-4 text-center text-black list-none transition-all cursor-pointer hover:bg-amber-950 hover:text-white">
            Cursos
          </li>
          <li className="w-full p-4 text-center text-black list-none transition-all cursor-pointer hover:bg-amber-950 hover:text-white">
            Cafés en grano
          </li>
          <li className="w-full p-4 text-center text-black list-none transition-all cursor-pointer hover:bg-amber-950 hover:text-white">
            Productos en venta
          </li>
          <li className="w-full p-4 text-center text-black list-none transition-all cursor-pointer hover:bg-amber-950 hover:text-white">
            Sobre nosotros
          </li>
        </div>
      </header>
    </div>
  );
}

export default Header;
