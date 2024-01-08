
const rate = [1, 2, 3, 4, 5]

function review(rate: number | boolean) {
    if (!rate) {
        console.log("O usuario não deixou uma review");
    } 
}

console.log(review(false));
console.log(review(3));

// correção do professor:

type Review = number | boolean

function showUserReview(review: Review) {
    if (!review) {
        console.log("VocÊ não avaliou o produto");
        return
    }
    console.log(`A nota que voce deu foi: ${review}, obrigada`);
}

showUserReview(false)
showUserReview(5)
showUserReview(2)