<!--Animation components-->
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>{{global.category_title}}</ion-title>
  </ion-navbar>
</ion-header>
<!--Content-->

<ion-content>
  <!--PAGE APPEARANCE ANIMATIONS - Fade in left-->
  <!-- <appearance-animation-layout-1 [data]="data" [events]="events">
  </appearance-animation-layout-1> -->

  <!--Theme Appearance animations - Fade in left-->
  <ion-grid no-padding>
    <ion-row>
      <ion-col col-12>

        <ion-list full-lines>
          <ion-searchbar placeholder="Search" (ionInput)="search($event)" [showCancelButton]="true"
            (ionCancel)="onCancelSearch()">
          </ion-searchbar>

          <ng-container *ngFor="let item of animateItems; let i = index;">

            <ion-item item-divider [ngClass]="animateClass" (click)="onitemclick('onItemClick', item, $event)"
              class="    {{item.selected}}"> 
              <ion-avatar item-start class="imageCats">
                <img
                  [src]="(item.image == '') ? 'assets/images/background/placeholder.jpg' : 'http://lakud.com/uploads/category/'+item.image"
                  alt="{{item.title}}" />
              </ion-avatar> 
              <h2 item-title>{{item.title}}</h2> 
                    <ion-icon icon-small item-right class="icon icon-md " [ngClass]="(item.selected=='active')?'ion-md-arrow-dropdown':'ion-md-arrow-dropright'" role="img"></ion-icon> 
            </ion-item>
            <div class="subListClass {{item.selected}}">





                <div *ngIf="item.productsList">

                    <div class='itemList'  *ngFor="let products of item.productsList; let s = index;" > 


                      
              <ion-avatar   class="imageCats" (click)="onClickShowProductCart(products)">
                  <img [src]="products.displayImage[0]"
                    alt="Product ID: {{products.product_id}}" />
                </ion-avatar>

                      <!--
                        <ion-slides pager>
                            <ion-slide class="imgPr" *ngFor="let sub of products.displayImage; let i = index;"[style.background-image]="'url(' + (sub ) + ')'" >
                              <h2>Product ID: {{products.product_id}}</h2>
                             </ion-slide> 
                          
                          </ion-slides>
                        -->

                        </div>

                  
                    </div>


              <!-- 
              <ion-slides class="sliderProd" pager  *ngIf="productsList">
              <ion-slide  *ngFor="let sub of productsList.product_image; let s = index;" >
                <h2>{{sub.title}}</h2>
              </ion-slide>
            </ion-slides>

              <ion-list *ngIf="productsList">
                <ion-item  *ngFor="let sub of productsList; let s = index;"> 
                  <ion-avatar item-start>
                    <img  [src]="(sub.product_image == '') ? 'assets/images/background/placeholder.jpg' : 'http://lakud.com/uploads/category/'+sub.product_image"
                    alt="{{sub.title}}">
                  </ion-avatar>
                  <h2>{{sub.title}}</h2>
                  <p>{{sub.product_title}} </p>
                  <button ion-button clear item-end (click)="onSubItemCLick(   sub.product_id )" >View</button>
                </ion-item>
              </ion-list>
            -->
            </div>
          </ng-container>
        </ion-list>
      </ion-col>
    </ion-row>
  </ion-grid>

</ion-content>



<ion-footer>
  <ion-toolbar>
    <common-footer></common-footer>
  </ion-toolbar>
</ion-footer>