import styled from "styled-components";
import motoboy from "../../assets/images/motoboy.jpeg"

export const MainSpace = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageSpace = styled.div`
  width: 45vw;
  height: 100vh;
  background-image: url("${motoboy}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormSpace = styled.div`
  width: 55vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
{/* <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={12} md={6} sx={{}}>
        <img src={motoboy} style={{width: "100%", height: "100vh" }} alt="" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          height: "60%"
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px"
          }}>
          <img src={favicon} style={{ width: "60px" }} alt="" />
          <Typography variant="h4" color="initial" pl="10px">
            Fast Food
          </Typography>
        </Box>
        <UserData />

      </Grid>
    </Grid > */}
