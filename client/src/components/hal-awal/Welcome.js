import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import './welcome.css';


// temp
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';

//temp2
import Event from 'material-ui/svg-icons/action/event';
import LocalLibrary from 'material-ui/svg-icons/maps/local-library';
import DeviceHandphone from 'material-ui/svg-icons/device/devices';




const muiTheme = getMuiTheme({palette: {
        // accent1Color: deepOrange500
    }});


// const DivFitur = (     <div>         <Fitur nomor={"Penjadwalan pengajaran
// untuk asisten agar pengajaran dapat berjalan dengan terstruktur  "}/>
// <Fitur nomor={"Manajemen inventaris ruangan laboratorium"}/>         <Fitur
// nomor={"Integrasi komputer admin dengan mobile device"}/>         <Fitur
// nomor={""}/>     </div> )

const DivFitur = (

    <div className="col-md-9 col-md-offset-2" style={{paddingTop:5}}>
        <List>
            <ListItem
                primaryText="Penjadwalan pengajaran untuk instruktur."
                leftIcon={< Event viewBox = {
                "0 0 24 24"
            } />}/>
            <ListItem primaryText="Manajemen penghitungan inventaris laboratorium." leftIcon={< LocalLibrary />}/>
            <ListItem primaryText="Integrasi komputer admin dengan mobile device." leftIcon={< DeviceHandphone />}/>
           
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
                    body={Text.Badan} Optional={DivFitur}
                    styleBadan={{textAlign:'center', paddingTop:10}}
                    />

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
