import React from "react";
import Grid from '@mui/material/Grid';
import Footer from "../components/Footer";
import { Container, CssBaseline, Paper } from "@mui/material";
import Typography from '@mui/material/Typography';
import ButtonUniversal from "../components/ButtonUniversal";
//Redux
import { RootState } from "../redux-rtk/store";
import { useDispatch, useSelector } from 'react-redux';

import IEshop from "../ts/IEeshop";
//
import SearchFiddle from "../components/SearchFiddle";
import SearchFiddle2 from "../components/SearchFiddle2";
//
import TileEshop from "../components/TileEshop";

import IconPlus from '../icons/ico-btn-plus.png';

type EshopsProps = {

};

const Eshops: React.FC<EshopsProps> = ({ }) => {
    const eshops = useSelector((state: RootState) => state.data.eshops)
    //Mby to put blog flag check and write if debug
    ////console.log("eshops")
    ////console.log(eshops)
    const FuncAddEshop = (): Promise<void> => {
        console.log("AddEshop")
        return Promise.resolve();
    }
    return (
        <React.Fragment>
            <div style={{ textAlign: 'center' }}>
                <Container>
                    <div>&nbsp;</div>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <SearchFiddle />
                        </Grid>
                        <Grid item xs={4}>
                            <div>&nbsp;</div>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonUniversal icon={IconPlus} side="L" title="Add e-shop" color="#F23CFF" textColor="white" actionDelegate={FuncAddEshop} />
                        </Grid>
                    </Grid>
                </Container>
                <div>
                    <p style={{ textAlign: 'left', marginLeft: '0px', fontFamily: 'Pixgamer' }}>
                        {eshops?.length} results
                    </p>
                    <Grid container spacing={2}>
                        {eshops?.map((eshop: IEshop) => (
                            <Grid item xs={2} key={"34"}>
                                <TileEshop 
                                likes={"7"} 
                                tile={eshop}
                            />
                            </Grid>
                        ))}
                    </Grid>
                    {/*<Grid container spacing={2}>
                        <Grid item xs={2}>
                            <TileEshop likes="7" logo="https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg" title="Alza.cz" caption="Nejvetsi prodejce elektroniky v CR" />
                        </Grid>
                        <Grid item xs={2}>
                            <TileEshop likes="7" logo="https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg" title="Alza.cz" caption="Nejvetsi prodejce elektroniky v CR" />
                        </Grid>
                        <Grid item xs={2}>
                            <TileEshop likes="7" logo="https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg" title="Alza.cz" caption="Nejvetsi prodejce elektroniky v CR" />
                        </Grid>
                        <Grid item xs={2}>
                            <TileEshop likes="7" logo="https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg" title="Alza.cz" caption="Nejvetsi prodejce elektroniky v CR" />
                        </Grid>
                        <Grid item xs={2}>
                            <TileEshop likes="7" logo="https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg" title="Alza.cz" caption="Nejvetsi prodejce elektroniky v CR" />
                        </Grid>
                        <Grid item xs={2}>
                            <TileEshop likes="7" logo="https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg" title="Alza.cz" caption="Nejvetsi prodejce elektroniky v CR" />
                        </Grid>
                    </Grid>*/}
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default Eshops;