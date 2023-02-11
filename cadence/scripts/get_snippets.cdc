import Story from "../contracts/Story.cdc"

pub fun main(): [ Story.Snippet ] {
    return Story.getSnippets()
}