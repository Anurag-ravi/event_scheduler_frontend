import alcher from "../assets/club_logos/alcher.jpg";
import codingclub from "../assets/club_logos/codingclub.png";
import swc from "../assets/club_logos/swc.png";

export const getLogo = (clubname) => {
    switch (clubname) {
        case "CODING CLUB":
            return codingclub;
        case "ALCHER CLUB":
            return alcher;
        default:
            return swc;
    }
}