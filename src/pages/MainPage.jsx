import MediaCarousel from "../carrousel.jsx";
import CardsGrid from "../components/Card.jsx";
import Marquee from "../Marquee.jsx";

function MainPage() {
  return (
    <div className="w-screen h-screen bg-amber-900">
      <Marquee texto={"Maxi Cafee"} />
      <MediaCarousel />
      <CardsGrid />
      {/* informative ban */}
      <div
        id="informative-ban"
        className="grid grid-cols-1 gap-6 p-20 text-white sm:ga sm:grid-cols-3 lg:grid-cols-3 bg-amber-950"
        // className="grid grid-cols-1 gap-6 p-20 text-white bg-white border-b-2 sm:ga sm:grid-cols-3 lg:grid-cols-3"
      >
        {/* Tarjeta 1 */}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAn5JREFUWEftlzloVVEQhr+IGxYiqGBMXHAholgFtyCCVm6VoCBW2hiX1sIYgkuhWJhClKTSSkTRyrVQtBBcSiM2Lli4oJ0iLojx/DBXji/vLufcG/OKTPfenX/Od+fMmTm3iQazpgbjYRQob0dqM3TYE3wD7gJP8oJU+bwWaLBO8HPArioXzYpVBEj67cDF/wGVtWXtwGaDeACsHgkgf80ZwFtgjP25FBgYbqi8Y38J2GoQZ4D9Iw20BrhvEJ+B3oqBvgLngU9J3LwMyU/btKRiED+c2sryEKA9wNlhBHrjsjQ3BGgS8B6YbKKrwNOSgDuB2RbjONAVAiTf015BXwa2lQCaAnwExlmMecDrUKD5wAsT/QJmAR8iofYCOrGyh8AqP06Rok787wDr7Idm3pFIoMfAMtN2Av2xQFuAKyZWdlqA34FQi4DnpvkOTAN09P9aSIbUsdW51cFlqiPVU4iddAAHTKDZqBn5j4UASdgNHLMI91zTXBtAoxdSZqebZr2rn9tlgaZa0LEWaAHwsiDURlc71833HdAKDLnuhGZI8S54qVbD3FcQyJ+LJ4CD9XQxQB2AriOyL65hnioIdAhIMrvQayOlaigRPwMWFwSpdRvSe3yHmAxJr9OhrYuxHVnaWKAEqi2QSDMw6WV1pWWAAlmKuccCjXcNss/u3K/cNfeou9PcSFlSx70H0BC95tqGxsXPNLxYIDW1m17QR8DKlEVUxCu8Zxuc762qgZSd3V7QH8DElEU0syZ4zzRMlaVKa6jZ5lqS4axFfHh15plZV5fYLdPbzXGf2ZsA1ZA+udPqQvWma4tqSKNDV9ZUKwNU7NgEeo0C5SWs4TL0B4iRYCVWN1gvAAAAAElFTkSuQmCC"
            alt="Descuentos"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-lg font-semibold">Descuentos</h2>
          <p className="text-gray-600">10% OFF llevando 4 cafés de 250 gr</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAn5JREFUWEftlzloVVEQhr+IGxYiqGBMXHAholgFtyCCVm6VoCBW2hiX1sIYgkuhWJhClKTSSkTRyrVQtBBcSiM2Lli4oJ0iLojx/DBXji/vLufcG/OKTPfenX/Od+fMmTm3iQazpgbjYRQob0dqM3TYE3wD7gJP8oJU+bwWaLBO8HPArioXzYpVBEj67cDF/wGVtWXtwGaDeACsHgkgf80ZwFtgjP25FBgYbqi8Y38J2GoQZ4D9Iw20BrhvEJ+B3oqBvgLngU9J3LwMyU/btKRiED+c2sryEKA9wNlhBHrjsjQ3BGgS8B6YbKKrwNOSgDuB2RbjONAVAiTf015BXwa2lQCaAnwExlmMecDrUKD5wAsT/QJmAR8iofYCOrGyh8AqP06Rok787wDr7Idm3pFIoMfAMtN2Av2xQFuAKyZWdlqA34FQi4DnpvkOTAN09P9aSIbUsdW51cFlqiPVU4iddAAHTKDZqBn5j4UASdgNHLMI91zTXBtAoxdSZqebZr2rn9tlgaZa0LEWaAHwsiDURlc71833HdAKDLnuhGZI8S54qVbD3FcQyJ+LJ4CD9XQxQB2AriOyL65hnioIdAhIMrvQayOlaigRPwMWFwSpdRvSe3yHmAxJr9OhrYuxHVnaWKAEqi2QSDMw6WV1pWWAAlmKuccCjXcNss/u3K/cNfeou9PcSFlSx70H0BC95tqGxsXPNLxYIDW1m17QR8DKlEVUxCu8Zxuc762qgZSd3V7QH8DElEU0syZ4zzRMlaVKa6jZ5lqS4axFfHh15plZV5fYLdPbzXGf2ZsA1ZA+udPqQvWma4tqSKNDV9ZUKwNU7NgEeo0C5SWs4TL0B4iRYCVWN1gvAAAAAElFTkSuQmCC"
            alt="Envíos gratis"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-lg font-semibold">Envíos gratis en CABA</h2>
          <p className="text-gray-600">Para compras desde $40.000</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAn5JREFUWEftlzloVVEQhr+IGxYiqGBMXHAholgFtyCCVm6VoCBW2hiX1sIYgkuhWJhClKTSSkTRyrVQtBBcSiM2Lli4oJ0iLojx/DBXji/vLufcG/OKTPfenX/Od+fMmTm3iQazpgbjYRQob0dqM3TYE3wD7gJP8oJU+bwWaLBO8HPArioXzYpVBEj67cDF/wGVtWXtwGaDeACsHgkgf80ZwFtgjP25FBgYbqi8Y38J2GoQZ4D9Iw20BrhvEJ+B3oqBvgLngU9J3LwMyU/btKRiED+c2sryEKA9wNlhBHrjsjQ3BGgS8B6YbKKrwNOSgDuB2RbjONAVAiTf015BXwa2lQCaAnwExlmMecDrUKD5wAsT/QJmAR8iofYCOrGyh8AqP06Rok787wDr7Idm3pFIoMfAMtN2Av2xQFuAKyZWdlqA34FQi4DnpvkOTAN09P9aSIbUsdW51cFlqiPVU4iddAAHTKDZqBn5j4UASdgNHLMI91zTXBtAoxdSZqebZr2rn9tlgaZa0LEWaAHwsiDURlc71833HdAKDLnuhGZI8S54qVbD3FcQyJ+LJ4CD9XQxQB2AriOyL65hnioIdAhIMrvQayOlaigRPwMWFwSpdRvSe3yHmAxJr9OhrYuxHVnaWKAEqi2QSDMw6WV1pWWAAlmKuccCjXcNss/u3K/cNfeou9PcSFlSx70H0BC95tqGxsXPNLxYIDW1m17QR8DKlEVUxCu8Zxuc762qgZSd3V7QH8DElEU0syZ4zzRMlaVKa6jZ5lqS4axFfHh15plZV5fYLdPbzXGf2ZsA1ZA+udPqQvWma4tqSKNDV9ZUKwNU7NgEeo0C5SWs4TL0B4iRYCVWN1gvAAAAAElFTkSuQmCC"
            alt="Envíos"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-lg font-semibold">Envíos a todo el país</h2>
          <p className="text-gray-600">Con cobertura nacional</p>
        </div>
      </div>

      <div id="about">
        <p className="p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore
          suscipit mollitia repudiandae, odio quos nam quasi itaque possimus
          iusto sint, omnis, incidunt molestias eveniet sapiente aspernatur
          repellat. Molestias, suscipit.
        </p>
      </div>
    </div>
  );
}
export default MainPage;
