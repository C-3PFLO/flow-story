pub contract OurStory {

    pub struct Snippet {
        pub let storySnippet: String
        pub let author: Address
        pub let nextAuthor: Address
        init(storySnippet: String, author: Address, nextAuthor: Address) {
            self.storySnippet = storySnippet
            self.author = author
            self.nextAuthor = nextAuthor
        }
    }

    pub event AppendedToStory(
        storySnippet: String,
        author: Address,
        nextAuthor: Address
    )

    pub var currentAuthor: Address
    pub var snippets: [Snippet]

    pub fun setCurrentAuthor(author: Address) {
        self.currentAuthor = author
    }

    pub fun appendToStory(storySnippet: String, author: Address, nextAuthor: Address) {
        pre {
            storySnippet.length > 2 : "snippet must be > 2 characters"
            storySnippet.length <= 280 : "snippet must be <= 280 characters"
            author == self.currentAuthor : "submitting author is not current author address"
            nextAuthor != author : "next author cannot equal current author"
        }
        self.snippets.append(
            Snippet(
                storySnippet: storySnippet,
                author: author,
                nextAuthor: nextAuthor
            )
        )
        self.currentAuthor = nextAuthor
        emit AppendedToStory(
            storySnippet: storySnippet,
            author: author,
            nextAuthor: nextAuthor
        )
    }

    pub fun getSnippets(): [Snippet] {
        return self.snippets
    }

    init() {
        self.currentAuthor = self.account.address
        self.snippets = []
    }
}