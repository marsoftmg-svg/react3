namespace App {
    export namespace Models {
        export interface User {
            name: string
        }
    }
    export namespace Services {
        export function greet(user: Models.User): string {
            return `Hello ${user.name}`;
        }
    }
}

const user: App.Models.User = {name: "Tom"}
console.log(App.Services.greet(user));