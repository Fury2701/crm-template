import * as React from 'react';
import Sidenav from '../components/Sidenav';
import According from '../components/According';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import "../home.css"

export default function Home() {
  return (
    <div className="bgcolor">
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component={"main"} sx={{ flexGrow: 1, p: 3, marginTop:10
        }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49+"%",height:150}} className="gradient">
                  <CardContent>
                    <div>
                      <CreditScoreIcon style={{color:"aliceblue",fontSize:"40px"}}/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"aliceblue",marginTop:2}}>
                      ₴37850.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Дохід
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49+"%",height:150}} className="gradientlight">
                  <CardContent>
                    <div>
                      <ShoppingCartIcon style={{color:"aliceblue",fontSize:"40px"}}/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"aliceblue",marginTop:2}}>
                      ₴72380.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Сума покупок
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2} sx={{marginTop:-3}}>
                <Card sx={{ minWidth:345 }} className="gradientlight">                 
                    <div className="paddi2">
                      <Stack spacing={2} direction="row">
                        <StorefrontIcon style={{fontSize:"35px", marginTop: "6px", marginLeft:"20px",color:"aliceblue"}}/>
                        <div className="paddi">
                          <span className="numtittle" style={{color:"aliceblue"}}>563</span>
                          <br/>
                          <span className="numsubtittle">Кількість продажів</span>
                        </div> 
                      </Stack>
                    </div>
                </Card>
                <Card sx={{ minWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <StorefrontIcon style={{fontSize:"35px", marginTop: "6px", marginLeft:"20px"}} />
                      <div className="paddi">
                        <span className="numtittle">563</span>
                        <br/>
                        <span className="numsubtittle">Кількість покупок</span>
                      </div> 
                    </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{marginTop:3}}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height:60+"vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height:60+"vh" }}>
                <CardContent>
                  <div className="paddi">
                    <span className="numtittle">Популярні Товари</span>
                    <br/>
                    <br/>
                  </div> 
                  <According/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </Box>
        </Box>  
      </Box>
    </div>
  );
}
