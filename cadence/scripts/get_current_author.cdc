import OurStory from "../contracts/OurStory.cdc"

pub fun main(): Address {
    return OurStory.currentAuthor
}