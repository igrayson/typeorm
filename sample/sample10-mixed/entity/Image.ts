import {PrimaryColumn, Column} from "../../../src/decorator/Columns";
import {Table} from "../../../src/decorator/Tables";
import {ManyToOne, OneToMany, OneToOne} from "../../../src/decorator/Relations";
import {Post} from "./Post";
import {ImageDetails} from "./ImageDetails";

@Table("sample10_image")
export class Image {

    @PrimaryColumn("int", { autoIncrement: true })
    id: number;

    @Column()
    name: string;
    
    @ManyToOne<Post>(() => Post, post => post.images)
    post: Post;
    
    @ManyToOne<Post>(() => Post, post => post.secondaryImages, {
        isCascadeInsert: true
    })
    secondaryPost: Post;

    @OneToOne<ImageDetails>(true, () => ImageDetails, details => details.image, {
        isCascadeInsert: true,
        isCascadeUpdate: true,
        isCascadeRemove: true
    })
    details: ImageDetails;

}