// Biryani Images
import PlainBiryani from '../Assets/img/Biryani/Plain Biryani.jpg';
import ChickenBiryani from '../Assets/img/Biryani/Chicken Biryani.jpg';
import MuttonBiryani from '../Assets/img/Biryani/Mutton Biryani.jpg';
import VegetableBiryani from '../Assets/img/Biryani/Vegetable Biryani.jpg';
import DumBiryani from '../Assets/img/Biryani/Dum Biryani.webp';
import TandooriBiryani from '../Assets/img/Biryani/Tandoori Biryani.jpg';
import EggBiryani from '../Assets/img/Biryani/Egg Biryani.webp';
import SeafoodBiryani from '../Assets/img/Biryani/Seafood Biryani.jpg';

// Dosa Images
import PlainDosa from '../Assets/img/DOSA/Plain Dosa.jpg';
import MasalaDosa from '../Assets/img/DOSA/Masala Dosa.jpg';
import OnionDosa from '../Assets/img/DOSA/Onion Dosa.jpg';
import RawaDosa from '../Assets/img/DOSA/Rawa Dosa.jpg';
import CheeseDosa from '../Assets/img/DOSA/cheese dosa.jpg';
import PaneerDosa from '../Assets/img/DOSA/Paneer Dosa.jpg';
import SpinachDosa from '../Assets/img/DOSA/Spinach Dosa.jpg';
import PesarattuDosa from '../Assets/img/DOSA/Pesarattu Dosa.jpg';

// Paratha Images
import AlooParatha from '../Assets/img/Paratha/Aloo Paratha.webp';
import CheeseParatha from '../Assets/img/Paratha/Cheese Paratha.webp';
import DalParatha from '../Assets/img/Paratha/Dal Paratha.jpg';
import GobiParatha from '../Assets/img/Paratha/Gobi Paratha.webp';
import MethiParatha from '../Assets/img/Paratha/Methi Paratha.jpg';
import MixedVegetableParatha from '../Assets/img/Paratha/Mixed Vegetable Paratha.jpg';
import OnionParatha from '../Assets/img/Paratha/Onion Paratha.jpg';
import PaneerParatha from '../Assets/img/Paratha/Paneer Paratha.jpg';

// Cake Images
import ChocolateCake from '../Assets/img/Cake/Chocolate Cake.jpeg';
import VanillaCake from '../Assets/img/Cake/Vanilla Cake.webp';
import RedVelvetCake from '../Assets/img/Cake/Red Velvet Cake.jpg';
import FruitCake from '../Assets/img/Cake/Fruit Cake.jpeg';
import LemonCake from '../Assets/img/Cake/Lemon Cake.jpg';
import CarrotCake from '../Assets/img/Cake/Carrot Cake.jpg';
import ChocolateMousseCake from '../Assets/img/Cake/Chocolate Mousse Cake.jpg';
import StrawberryShortcake from '../Assets/img/Cake/Strawberry Shortcake.jpg';

// Idli Images
import PlainIdli from '../Assets/img/Idli/Plain Idli.jpg';
import MasalaIdli from '../Assets/img/Idli/Masala Idli.webp';
import RawaIdli from '../Assets/img/Idli/Rawa Idli.jpg';
import KanchipuramIdli from '../Assets/img/Idli/Kanchipuram Idli.jpg';
import MiniIdli from '../Assets/img/Idli/Mini Idli.webp';
import PodiIdli from '../Assets/img/Idli/Podi Idli.webp';
import SambarIdli from '../Assets/img/Idli/Sambar Idli.jpg';
import CurdIdli from '../Assets/img/Idli/Curd Idli.webp';

// Poha Images
import PlainPoha from '../Assets/img/Poha/Plain Poha.webp';
import KandaPoha from '../Assets/img/Poha/Kanda Poha.jpg';
import PohaWithSev from '../Assets/img/Poha/Poha with Sev.jpg';
import MasalaPoha from '../Assets/img/Poha/Masala Poha.jpg';
import PohaWithEgg from '../Assets/img/Poha/Poha with Egg.jpg';
import SweetPoha from '../Assets/img/Poha/Sweet Poha.webp';
import PohaWithVegetables from '../Assets/img/Poha/Poha with Vegetables.jpg';
import CurriedPoha from '../Assets/img/Poha/Curried Poha.png';

// Upma Images
import PlainUpma from '../Assets/img/Upma/Plain Upma.webp';
import VegetableUpma from '../Assets/img/Upma/Vegetable Upma.jpg';
import MasalaUpma from '../Assets/img/Upma/Masala-Oats-Upma.jpg';
import UpmaWithNuts from '../Assets/img/Upma/Upma with Nuts.jpg';
import LemonUpma from '../Assets/img/Upma/Lemon Upma.jpg';
import RawaUpma from '../Assets/img/Upma/Rawa Upma.jpg';

// Omelette Images
import PlainOmelette from '../Assets/img/Omlet/Plain Omelette.jpeg';
import CheeseOmelette from '../Assets/img/Omlet/Cheese Omelette.jpg';
import VegetableOmelette from '../Assets/img/Omlet/Vegetable Omelette.jpg';
import SpicyOmelette from '../Assets/img/Omlet/Spicy Omelette.jpg';
import MushroomOmelette from '../Assets/img/Omlet/Mushroom Omelette.jpg';
import HerbOmelette from '../Assets/img/Omlet/Herb Omelette.jpg';

const FoodItems = [
    // Biryani Items
    {
        id: 'f1',
        imageurl: PlainBiryani,
        restaurantName: 'Spice Junction',
        timeForDelivery: '4.2 • 25-30 mins',
        restaurantLocation: 'Indian, Mughlai, North Indian, Street Food, Snacks, Hinjawadi',
        foodName: 'Plain Biryani',
        foodDescription: 'A flavorful rice dish made with aromatic basmati rice, spices, and cooked to perfection.',
        price: 150
    },
    {
        id: 'f2',
        imageurl: ChickenBiryani,
        restaurantName: 'Biryani Bliss',
        timeForDelivery: '4.5 • 15-20 mins',
        restaurantLocation: 'Indian, Fast Food, Beverages, Desserts, Hinjawadi',
        foodName: 'Chicken Biryani',
        foodDescription: 'Succulent pieces of chicken marinated in spices and layered with fragrant basmati rice.',
        price: 200
    },
    {
        id: 'f3',
        imageurl: MuttonBiryani,
        restaurantName: 'Royal Biryani House',
        timeForDelivery: '4.0 • 30-35 mins',
        restaurantLocation: 'Mughlai, North Indian, Vegetarian, Fast Food, Hinjawadi',
        foodName: 'Mutton Biryani',
        foodDescription: 'Tender mutton cooked with spices and layered with aromatic rice for a rich and flavorful dish.',
        price: 250
    },
    {
        id: 'f4',
        imageurl: VegetableBiryani,
        restaurantName: 'Veggie Delights',
        timeForDelivery: '4.3 • 20-25 mins',
        restaurantLocation: 'Vegetarian, Indian, Fast Food, Desserts, Hinjawadi',
        foodName: 'Vegetable Biryani',
        foodDescription: 'A delightful mix of seasonal vegetables cooked with basmati rice and aromatic spices.',
        price: 120
    },
    {
        id: 'f5',
        imageurl: DumBiryani,
        restaurantName: 'Dum Biryani Corner',
        timeForDelivery: '4.7 • 20-30 mins',
        restaurantLocation: 'Indian, Mughlai, Home Delivery, Snacks, Hinjawadi',
        foodName: 'Dum Biryani',
        foodDescription: 'Slow-cooked biryani where the flavors meld together, creating a rich and aromatic dish.',
        price: 220
    },
    {
        id: 'f6',
        imageurl: TandooriBiryani,
        restaurantName: 'Tandoori Flavors',
        timeForDelivery: '4.1 • 25-30 mins',
        restaurantLocation: 'Tandoori, North Indian, Fast Food, Snacks, Hinjawadi',
        foodName: 'Tandoori Biryani',
        foodDescription: 'Biryani cooked with tandoori chicken, infused with smoky flavors and spices.',
        price: 240
    },
    {
        id: 'f7',
        imageurl: EggBiryani,
        restaurantName: 'Biryani Express',
        timeForDelivery: '4.4 • 15-20 mins',
        restaurantLocation: 'Indian, Fast Food, Beverages, Hinjawadi',
        foodName: 'Egg Biryani',
        foodDescription: 'A unique biryani made with boiled eggs and fragrant basmati rice, perfect for egg lovers.',
        price: 180
    },
    {
        id: 'f8',
        imageurl: SeafoodBiryani,
        restaurantName: 'Flavorful Biryani',
        timeForDelivery: '4.6 • 20-25 mins',
        restaurantLocation: 'Indian, Mughlai, Home Food, Snacks, Hinjawadi',
        foodName: 'Seafood Biryani',
        foodDescription: 'A delicious biryani made with fresh seafood and aromatic spices, a must-try for seafood lovers.',
        price: 300
    },
    // Dosa Items
    {
        id: 'd1',
        imageurl: PlainDosa,
        restaurantName: 'Dosa Delight',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Plain Dosa',
        foodDescription: 'Crispy rice crepes served with coconut chutney and sambar, a traditional South Indian dish.',
        price: 50
    },
    {
        id: 'd2',
        imageurl: MasalaDosa,
        restaurantName: 'Dosa Corner',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Masala Dosa',
        foodDescription: 'Crispy dosa filled with spiced potato filling, served with chutney and sambar.',
        price: 70
    },
    {
        id: 'd3',
        imageurl: OnionDosa,
        restaurantName: 'Dosa House',
        timeForDelivery: '4.6 • 25-30 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Onion Dosa',
        foodDescription: 'Crispy dosa topped with finely chopped onions and served with chutney.',
        price: 60
    },
    {
        id: 'd4',
        imageurl: RawaDosa,
        restaurantName: 'Dosa Palace',
        timeForDelivery: '4.4 • 20-25 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Rawa Dosa',
        foodDescription: 'Thin and crispy dosa made from semolina, served with chutney and sambar.',
        price: 80
    },
    {
        id: 'd5',
        imageurl: CheeseDosa,
        restaurantName: 'Dosa Express',
        timeForDelivery: '4.2 • 15-20 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Cheese Dosa',
        foodDescription: 'Delicious dosa filled with melted cheese, served with chutney.',
        price: 90
    },
    {
        id: 'd6',
        imageurl: PaneerDosa,
        restaurantName: 'Dosa Station',
        timeForDelivery: '4.1 • 25-30 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Paneer Dosa',
        foodDescription: 'Crispy dosa filled with spiced paneer, served with chutney and sambar.',
        price: 100
    },
    {
        id: 'd7',
        imageurl: SpinachDosa,
        restaurantName: 'Dosa World',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Spinach Dosa',
        foodDescription: 'Healthy dosa made with spinach, served with chutney and sambar.',
        price: 70
    },
    {
        id: 'd8',
        imageurl: PesarattuDosa,
        restaurantName: 'Dosa Hub',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Pesarattu Dosa',
        foodDescription: 'Green gram dosa served with ginger chutney, a nutritious option.',
        price: 80
    },
    // Paratha Items
    {
        id: 'p1',
        imageurl: AlooParatha,
        restaurantName: 'Paratha Paradise',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'North Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Aloo Paratha',
        foodDescription: 'Stuffed flatbread with spiced potato filling, served with yogurt and pickle.',
        price: 60
    },
    {
        id: 'p2',
        imageurl: PaneerParatha,
        restaurantName: 'Paratha Junction',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'North Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Paneer Paratha',
        foodDescription: 'Delicious flatbread stuffed with spiced paneer, served with chutney.',
        price: 80
    },
    {
        id: 'p3',
        imageurl: GobiParatha,
        restaurantName: 'Paratha House',
        timeForDelivery: '4.6 • 25-30 mins',
        restaurantLocation: 'North Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Gobi Paratha',
        foodDescription: 'Flatbread stuffed with spiced cauliflower, served with yogurt and pickle.',
        price: 70
    },
    {
        id: 'p4',
        imageurl: MixedVegetableParatha,
        restaurantName: 'Paratha Express',
        timeForDelivery: '4.4 • 20-25 mins',
        restaurantLocation: 'North Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Mixed Vegetable Paratha',
        foodDescription: 'A wholesome flatbread stuffed with a mix of seasonal vegetables, served with chutney.',
        price: 90
    },
    {
        id: 'p5',
        imageurl: CheeseParatha,
        restaurantName: 'Paratha Delight',
        timeForDelivery: '4.2 • 15-20 mins',
        restaurantLocation: 'North Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Cheese Paratha',
        foodDescription: 'Flatbread stuffed with melted cheese, served with yogurt and pickle.',
        price: 100
    },
    {
        id: 'p6',
        imageurl: MethiParatha,
        restaurantName: 'Paratha World',
        timeForDelivery: '4.1 • 25-30 mins',
        restaurantLocation: 'North Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Methi Paratha',
        foodDescription: 'Flatbread made with fenugreek leaves, served with yogurt and pickle.',
        price: 70
    },
    {
        id: 'p7',
        imageurl: OnionParatha,
        restaurantName: 'Paratha Hub',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'North Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Onion Paratha',
        foodDescription: 'Flatbread stuffed with spiced onions, served with chutney.',
        price: 60
    },
    {
        id: 'p8',
        imageurl: DalParatha,
        restaurantName: 'Paratha Station',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'North Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Dal Paratha',
        foodDescription: 'Flatbread stuffed with spiced lentils, served with yogurt and pickle.',
        price: 70
    },
    // Cakes Items
    {
        id: 'c1',
        imageurl: ChocolateCake,
        restaurantName: 'Cake Corner',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'Bakery, Desserts, Hinjawadi',
        foodName: 'Chocolate Cake',
        foodDescription: 'Rich and moist chocolate cake topped with creamy chocolate frosting.',
        price: 250
    },
    {
        id: 'c2',
        imageurl: VanillaCake,
        restaurantName: 'Sweet Treats',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'Bakery, Desserts, Hinjawadi',
        foodName: 'Vanilla Cake',
        foodDescription: 'Light and fluffy vanilla cake with a smooth vanilla frosting.',
        price: 220
    },
    {
        id: 'c3',
        imageurl: RedVelvetCake,
        restaurantName: 'Cake Delight',
        timeForDelivery: '4.6 • 25-30 mins',
        restaurantLocation: 'Bakery, Desserts, Hinjawadi',
        foodName: 'Red Velvet Cake',
        foodDescription: 'Moist red velvet cake layered with cream cheese frosting.',
        price: 300
    },
    // Cakes Items
    {
        id: 'c4',
        imageurl: FruitCake,
        restaurantName: 'Cake House',
        timeForDelivery: '4.4 • 20-25 mins',
        restaurantLocation: 'Bakery, Desserts, Hinjawadi',
        foodName: 'Fruit Cake',
        foodDescription: 'Delicious cake loaded with fresh fruits and nuts, perfect for celebrations.',
        price: 280
    },
    {
        id: 'c5',
        imageurl: LemonCake,
        restaurantName: 'Cake World',
        timeForDelivery: '4.2 • 15-20 mins',
        restaurantLocation: 'Bakery, Desserts, Hinjawadi',
        foodName: 'Lemon Cake',
        foodDescription: 'Zesty lemon cake with a refreshing lemon glaze.',
        price: 230
    },
    {
        id: 'c6',
        imageurl: CarrotCake,
        restaurantName: 'Cake Station',
        timeForDelivery: '4.1 • 25-30 mins',
        restaurantLocation: 'Bakery, Desserts, Hinjawadi',
        foodName: 'Carrot Cake',
        foodDescription: 'Moist carrot cake topped with cream cheese frosting and walnuts.',
        price: 260
    },
    {
        id: 'c7',
        imageurl: ChocolateMousseCake,
        restaurantName: 'Cake Junction',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'Bakery, Desserts, Hinjawadi',
        foodName: 'Chocolate Mousse Cake',
        foodDescription: 'Decadent chocolate mousse layered between rich chocolate cake.',
        price: 350
    },
    {
        id: 'c8',
        imageurl: StrawberryShortcake,
        restaurantName: 'Cake Haven',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'Bakery, Desserts, Hinjawadi',
        foodName: 'Strawberry Shortcake',
        foodDescription: 'Light and fluffy cake layered with fresh strawberries and whipped cream.',
        price: 300
    },
    // Idli Items
    {
        id: 'i1',
        imageurl: PlainIdli,
        restaurantName: 'Idli House',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Plain Idli',
        foodDescription: 'Steamed rice cakes served with coconut chutney and sambar.',
        price: 40
    },
    {
        id: 'i2',
        imageurl: MasalaIdli,
        restaurantName: 'Idli Corner',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Masala Idli',
        foodDescription: 'Idlis stuffed with spiced potato filling, served with chutney.',
        price: 60
    },
    {
        id: 'i3',
        imageurl: RawaIdli,
        restaurantName: 'Idli Delight',
        timeForDelivery: '4.6 • 25-30 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Rawa Idli',
        foodDescription: 'Soft and fluffy idlis made from semolina, served with chutney.',
        price: 50
    },
    {
        id: 'i4',
        imageurl: KanchipuramIdli,
        restaurantName: 'Idli Express',
        timeForDelivery: '4.4 • 20-25 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Kanchipuram Idli',
        foodDescription: 'Spiced idlis steamed with a mix of spices and served with chutney.',
        price: 70
    },
    {
        id: 'i5',
        imageurl: MiniIdli,
        restaurantName: 'Idli Junction',
        timeForDelivery: '4.2 • 15-20 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Mini Idli',
        foodDescription: 'Small steamed idlis served with a variety of chutneys.',
        price: 30
    },
    {
        id: 'i6',
        imageurl: PodiIdli,
        restaurantName: 'Idli Station',
        timeForDelivery: '4.1 • 25-30 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Podi Idli',
        foodDescription: 'Idlis tossed in spicy lentil powder, served with chutney.',
        price: 60
    },
    {
        id: 'i7',
        imageurl: SambarIdli,
        restaurantName: 'Idli World',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Sambar Idli',
        foodDescription: 'Idlis served with a side of spicy sambar for dipping.',
        price: 50
    },
    {
        id: 'i8',
        imageurl: CurdIdli,
        restaurantName: 'Idli Hub',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'South Indian, Vegetarian, Snacks, Hinjawadi',
        foodName: 'Curd Idli',
        foodDescription: 'Idlis served with yogurt and a sprinkle of spices.',
        price: 55
    },
    // Omelette Items
    {
        id: 'o1',
        imageurl: PlainOmelette,
        restaurantName: 'Omelette Station',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'Breakfast, Vegetarian, Hinjawadi',
        foodName: 'Plain Omelette',
        foodDescription: 'Fluffy omelette made with fresh eggs, served with toast.',
        price: 80
    },
    {
        id: 'o2',
        imageurl: CheeseOmelette,
        restaurantName: 'Omelette Junction',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'Breakfast, Vegetarian, Hinjawadi',
        foodName: 'Cheese Omelette',
        foodDescription: 'Omelette filled with melted cheese, served with toast.',
        price: 100
    },
    {
        id: 'o3',
        imageurl: VegetableOmelette,
        restaurantName: 'Omelette Delight',
        timeForDelivery: '4.6 • 25-30 mins',
        restaurantLocation: 'Breakfast, Vegetarian, Hinjawadi',
        foodName: 'Vegetable Omelette',
        foodDescription: 'Omelette loaded with fresh vegetables, served with toast.',
        price: 90
    },
    {
        id: 'o4',
        imageurl: SpicyOmelette,
        restaurantName: 'Omelette Hub',
        timeForDelivery: '4.4 • 20-25 mins',
        restaurantLocation: 'Breakfast, Vegetarian, Hinjawadi',
        foodName: 'Spicy Omelette',
        foodDescription: 'Omelette made with spices and herbs for a flavorful kick.',
        price: 85
    },
    {
        id: 'o5',
        imageurl: MushroomOmelette,
        restaurantName: 'Omelette World',
        timeForDelivery: '4.2 • 15-20 mins',
        restaurantLocation: 'Breakfast, Vegetarian, Hinjawadi',
        foodName: 'Mushroom Omelette',
        foodDescription: 'Omelette filled with sautéed mushrooms, served with toast.',
        price: 110
    },
    {
        id: 'o6',
        imageurl: HerbOmelette,
        restaurantName: 'Omelette Palace',
        timeForDelivery: '4.1 • 25-30 mins',
        restaurantLocation: 'Breakfast, Vegetarian, Hinjawadi',
        foodName: 'Herb Omelette',
        foodDescription: 'Omelette made with fresh herbs for a delightful flavor.',
        price: 90
    },
    {
        id: 'o7',
        imageurl: PlainOmelette,
        restaurantName: 'Omelette Corner',
        timeForDelivery: '4.5 • 20-25 mins',
        restaurantLocation: 'Breakfast, Vegetarian, Hinjawadi',
        foodName: 'Onion Omelette',
        foodDescription: 'Omelette with finely chopped onions, served with toast.',
        price: 70
    },
    {
        id: 'o8',
        imageurl: CheeseOmelette,
        restaurantName: 'Omelette Express',
        timeForDelivery: '4.3 • 15-20 mins',
        restaurantLocation: 'Breakfast, Vegetarian, Hinjawadi',
        foodName: 'Cheese and Tomato Omelette',
        foodDescription: 'Omelette filled with cheese and fresh tomatoes, served with toast.',
        price: 95
    },
        // Poha Items
        {
            id: 'po1',
            imageurl: PlainPoha,
            restaurantName: 'Poha Palace',
            timeForDelivery: '4.5 • 20-25 mins',
            restaurantLocation: 'Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Plain Poha',
            foodDescription: 'Flattened rice cooked with spices, peanuts, and garnished with coriander.',
            price: 40
        },
        {
            id: 'po2',
            imageurl: KandaPoha,
            restaurantName: 'Poha Junction',
            timeForDelivery: '4.3 • 15-20 mins',
            restaurantLocation: 'Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Kanda Poha',
            foodDescription: 'Flattened rice cooked with onions, spices, and garnished with fresh coriander.',
            price: 50
        },
        {
            id: 'po3',
            imageurl: PohaWithSev,
            restaurantName: 'Poha Delight',
            timeForDelivery: '4.6 • 25-30 mins',
            restaurantLocation: 'Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Poha with Sev',
            foodDescription: 'Spicy poha topped with crispy sev and garnished with lemon.',
            price: 60
        },
        {
            id: 'po4',
            imageurl: MasalaPoha,
            restaurantName: 'Poha Express',
            timeForDelivery: '4.4 • 20-25 mins',
            restaurantLocation: 'Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Masala Poha',
            foodDescription: 'Spiced flattened rice cooked with vegetables and peanuts.',
            price: 55
        },
        {
            id: 'po5',
            imageurl: PohaWithEgg,
            restaurantName: 'Poha Station',
            timeForDelivery: '4.2 • 15-20 mins',
            restaurantLocation: 'Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Poha with Egg',
            foodDescription: 'Flattened rice cooked with spices and topped with a fried egg.',
            price: 70
        },
        {
            id: 'po6',
            imageurl: SweetPoha,
            restaurantName: 'Poha Hub',
            timeForDelivery: '4.1 • 25-30 mins',
            restaurantLocation: 'Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Sweet Poha',
            foodDescription: 'Flattened rice cooked with jaggery and garnished with coconut.',
            price: 50
        },
        {
            id: 'po7',
            imageurl: PohaWithVegetables,
            restaurantName: 'Poha World',
            timeForDelivery: '4.5 • 20-25 mins',
            restaurantLocation: 'Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Poha with Vegetables',
            foodDescription: 'Healthy poha cooked with seasonal vegetables and spices.',
            price: 60
        },
        {
            id: 'po8',
            imageurl: CurriedPoha,
            restaurantName: 'Poha Corner',
            timeForDelivery: '4.3 • 15-20 mins',
            restaurantLocation: 'Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Curried Poha',
            foodDescription: 'Flattened rice cooked with curry spices and garnished with coriander.',
            price: 55
        },
        // Upma Items
        {
            id: 'u1',
            imageurl: PlainUpma,
            restaurantName: 'Upma Junction',
            timeForDelivery: '4.5 • 20-25 mins',
            restaurantLocation: 'South Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Plain Upma',
            foodDescription: 'Savory semolina dish cooked with spices and vegetables.',
            price: 50
        },
        {
            id: 'u2',
            imageurl: VegetableUpma,
            restaurantName: 'Upma Delight',
            timeForDelivery: '4.3 • 15-20 mins',
            restaurantLocation: 'South Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Vegetable Upma',
            foodDescription: 'Upma cooked with a mix of seasonal vegetables and spices.',
            price: 60
        },
        {
            id: 'u3',
            imageurl: MasalaUpma,
            restaurantName: 'Upma Palace',
            timeForDelivery: '4.6 • 25-30 mins',
            restaurantLocation: 'South Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Masala Upma',
            foodDescription: 'Spicy upma made with semolina and a blend of spices.',
            price: 70
        },
        {
            id: 'u4',
            imageurl: UpmaWithNuts,
            restaurantName: 'Upma Express',
            timeForDelivery: '4.4 • 20-25 mins',
            restaurantLocation: 'South Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Upma with Nuts',
            foodDescription: 'Upma garnished with roasted nuts for added crunch.',
            price: 80
        },
        {
            id: 'u5',
            imageurl: LemonUpma,
            restaurantName: 'Upma Station',
            timeForDelivery: '4.2 • 15-20 mins',
            restaurantLocation: 'South Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Lemon Upma',
            foodDescription: 'Tangy upma made with lemon juice and spices for a refreshing taste.',
            price: 65
        },
        {
            id: 'u6',
            imageurl: RawaUpma,
            restaurantName: 'Upma Hub',
            timeForDelivery: '4.1 • 25-30 mins',
            restaurantLocation: 'South Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Rawa Upma',
            foodDescription: 'Traditional upma made from semolina, cooked with spices and vegetables.',
            price: 55
        },
        {
            id: 'u7',
            imageurl: PlainUpma,
            restaurantName: 'Upma World',
            timeForDelivery: '4.5 • 20-25 mins',
            restaurantLocation: 'South Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Coconut Upma',
            foodDescription: 'Upma cooked with grated coconut for a rich flavor.',
            price: 60
        },
        {
            id: 'u8',
            imageurl: VegetableUpma,
            restaurantName: 'Upma Corner',
            timeForDelivery: '4.3 • 15-20 mins',
            restaurantLocation: 'South Indian, Vegetarian, Breakfast, Hinjawadi',
            foodName: 'Upma with Vegetables',
            foodDescription: 'Healthy upma made with a variety of seasonal vegetables.',
            price: 70
        }
    
];

export default FoodItems;