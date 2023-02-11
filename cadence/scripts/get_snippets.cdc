import OurStory from "../contracts/OurStory.cdc"

pub fun main(): [ OurStory.Snippet ] {
    return OurStory.getSnippets()
}