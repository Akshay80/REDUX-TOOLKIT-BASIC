import Chance from "chance";

const chance = Chance();
// USED CHANCE FOR CREATING A FAKE DATA USING CHANCE NPM PACKAGE
export const fakeUserData = () => {
   return chance.name();
}