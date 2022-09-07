class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHtml() {
        return `<img class="img-dog" src="${this.avatar}" alt="Dog profile image">
                <div class="dog-info-section">
                    <p class="dog-description">${this.name}, ${this.age}</p>
                    <p class="dog-comment">${this.bio}</p>
                </div>`
    }
}

export default Dog