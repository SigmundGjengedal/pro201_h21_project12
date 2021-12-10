import { subscriptionModelData } from "./SubscriptionModelData";
import "./subscriptionCard.css";

// material ui components:
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
} from "@mui/material";

export default function SubscriptionCard() {
  return (
    <>
      <Container className="subscription-model-grid" size="md">
        <Grid
          container
          justifyContent="space-evenly"
          spacing={2}
          className="grid-container"
        >
          {subscriptionModelData.map((model) => (
            <Grid item key={model.id} xs={12} sm={5} md={3.5}>
              {model.Popular && (
                <div className="popular-box">
                  <p>Most popular</p>
                </div>
              )}
              {model.Popular || <div className="ghost-box"></div>}
              <Card className="sub-card">
                <CardContent className="card-content">
                  <h1 className="text-margin">{model.Name}</h1>
                  <h4 className="text-margin">{model.AccountsNumber}</h4>
                  <h1 className="border-bottom">
                    {model.Price} <span className="large-font">NOK</span>
                    <span className="grey-font"> /mo</span>
                  </h1>
                  <p className="span-p"> Features included</p>
                  <p>{model.Features[0]}</p>
                  <p>{model.Features[1]}</p>
                  <p>{model.Features[2]}</p>
                </CardContent>
                <CardActions>
                  <Button
                    className="button"
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Subscribe
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
