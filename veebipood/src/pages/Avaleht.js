import { useState } from "react";

function Avaleht() {
    //let synniaeg = "1913.12.31";
    const isikukood = "41513123113";
    const [synniaeg, uuendaSynniaega] = useState("1913.12.31");
    const [s6naline, uuendaS6naline] = useState("algv22rtus");
    const [numbriline, uuendaNumbriline] = useState(123456);
    const [kahendv22rtus, uuendaKahendV22rtus] = useState(true);
    
    const muudaSynniaega = () => {
        //synniaeg = "3213213121";
        uuendaSynniaega("19" + isikukood.substring(1,3) + "." + isikukood.substring(3,5) + "." + isikukood.substring(5,7));
        console.log(synniaeg);
    }

    const muudaMuutujad = () => {
        uuendaS6naline("uus v22rtus");
        uuendaNumbriline(111);
        uuendaKahendV22rtus(false);
    }
//kui kahendv22rtus on true, siis kuvab seda NIMI. kui vajutad seda nuppu, mis muudab k6iki muutujaid
//siis enam ei kuva nime rida n2iteks
    return (<div>
        <br/>
        <div>Isikukood: {isikukood}</div>
        <button onClick={() => muudaSynniaega()}>Arvuta synniaeg isikukoodi j2rgi</button>
        <br/><br/>
        <div>Synniaeg: {synniaeg}</div>
        { kahendv22rtus && <div>Nimi: Juku Juks</div>}
        <br />
        {numbriline > 10000 && <div>{s6naline}</div>}
        <div>{numbriline}</div>
        <div>{kahendv22rtus + kahendv22rtus}</div>
        <button onClick={() => muudaMuutujad()}>muuda k6ik muutujad</button>
    </div>);
}

export default Avaleht;