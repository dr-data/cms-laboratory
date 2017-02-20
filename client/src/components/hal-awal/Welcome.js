import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import './hal-awal.css';

// temp
import {List, ListItem} from 'material-ui/List';

//temp2
import Event from 'material-ui/svg-icons/action/event';
import LocalLibrary from 'material-ui/svg-icons/maps/local-library';
import DeviceHandphone from 'material-ui/svg-icons/device/devices';
import Database from 'material-ui/svg-icons/file/cloud-off';

const muiTheme = getMuiTheme({palette: {
        // accent1Color: deepOrange500
    }});

// const DivFitur = (     <div>         <Fitur nomor={"Penjadwalan pengajaran
// untuk asisten agar pengajaran dapat berjalan dengan terstruktur  "}/> <Fitur
// nomor={"Manajemen inventaris ruangan laboratorium"}/>         <Fitur
// nomor={"Integrasi komputer admin dengan mobile device"}/>         <Fitur
// nomor={""}/>     </div> )

const DivFitur = (

    <div className="col-md-9 col-md-offset-2" style={{
        paddingTop: 5
    }}>
        <List>
            <ListItem
                primaryText="Manajemen laboratorium secara keseluruhan"
                leftIcon={< LocalLibrary viewBox = {
                "0 0 24 24"
            } />}/>
            <ListItem
                primaryText="Integrasi komputer admin dengan mobile device."
                leftIcon={< DeviceHandphone />}/>
            <ListItem
                primaryText="Database yang tertanam didalam CMS dengan NeDB."
                leftIcon={< Database />}/>
          

        </List>
    </div>

)

const Text = {

    Judul: "Selamat Datang di CMS Laboratorium",
    Badan: "Kami menyediakan lanyanan management laboratorium seperti :"

}

export default class Welcome extends Component {
    render() {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <PaperMod
                    letak={'col-xs-offset-2 col-xs-10 col-md-7 col-md-offset-3 '}
                    judul={Text.Judul}
                    body={Text.Badan}
                    Optional={DivFitur}
                    styleBadan={{
                    textAlign: 'center',
                    paddingTop: 10
                }}/>

            </MuiThemeProvider>

        );
    }

    testApi() {

        fetch('/pesan')
            .then(function (res) {
                return res.text();
            })
            .then(function (body) {
                console.log(body);
            });

    }

}
