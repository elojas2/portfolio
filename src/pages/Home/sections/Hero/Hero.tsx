import { Grid, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"

const Hero = () => {

    const StyledHero = styled('div')(()=> ({
        background: 'black'
    }))
    const StyledImg = styled('img')(()=> ({
        width: "60%",
        borderRadius: "50%"

    }))
    return (
        <>
            <StyledHero>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid item xs={8}>
                        aaaa
                    </Grid>
                </Grid>
                Hero

            </StyledHero>
        </>
    )
  }
  
  export default Hero
  