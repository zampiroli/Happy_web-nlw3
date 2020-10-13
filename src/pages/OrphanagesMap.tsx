import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

/*Define o thema de acordo com a hora
* A partir das 19h ele deixa o thema noturno, isso até as 5 da manhã, fora desse horário o thema padrão é o street
*/
let currentTime = new Date().getTime();
let _mapTheme = currentTime >= 19 ? currentTime <= 5 ? 'light-v10' : 'dark-v10' : currentTime <= 4 ? 'dark-v10' : 'light-v10';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </header>

                <footer>
                    <strong>Arapongas</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map
                center={[-23.3978714, -51.4204603]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/${_mapTheme}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#FFF" />
            </Link>

        </div>
    );
}

export default OrphanagesMap;