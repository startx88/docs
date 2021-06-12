/**
 * What is ngrx:
 * 1. @ngrx is a state management library to provide angular to create reactive application.
 * 2. Managing global and local state., a single source of truth
 * 3. Isolation of side effects to promote a cleaner component architecture..
 * 4. Entity collection management.module
 * 5. Integration with the Angular Router.
 *
 * --------------------------------------------------------
 *  How ngrx/router-store works:
 * --------------------------------------------------------
 * Step:
 * 1. Need to install @ngrx/router-store
 * 2. Inject into app.module.ts using StoreRoutingConnectionModule.forRoot({})
 *    Configuration:
 *    a. staticKey: default is router
 *    b.
 *    c.
 *    d.
 * 3. Add router state and reducer into app state and reducer using these (RouterReducerState and routerReducer)
 *   Ex: App State
 *   export interface AppState{
 *    auth:AuthState,
 *    post:PostState,
 *    router:RouterReducerState
 *   }
 *
 *   Ex: App Reducer
 *   export const reducer = ActionReducerMap({auth:authReducer,router:routerReducer, post:postReducer})
 *
 *
 *  now you can check the router into the ngrx/store-devtools
 *  state present in it:
 *  router:{state:{...allstate}, navigationId}
 *
 *  you can customize state using Custom route serializer.
 *
 *  @ngrx/router-store Actions:
 *  1. routerRequestAction: ROUTER_REQUEST => At the start of each navigation, the router will dispatch a ROUTER_REQUEST action
 *  2. routerNavigationAction: ROUTER_NAVIGATON => During navigation, before any guards or resolvers run, the router will dispatch a ROUTER_NAVIGATION action,
 *                                                 If you want the ROUTER_NAVIGATION to be dispatched after guards or resolvers run, change the Navigation Action Timing.
 *  3. routerNavigatedAction: ROUTER_NAVIGATED => After a successful navigation, the router will dispatch a ROUTER_NAVIGATED action
 *  4. routerCancelAction: ROUTER_CANCEL => When the navigation is cancelled, for example due to a guard saying that the user cannot access the requested page, the router will dispatch a ROUTER_CANCEL action.
 *  5. routerErrorActino: ROUTER_ERROR => When there is an error during navigation, the router will dispatch a ROUTER_ERROR action.
 *
 *  Order of actions:
 *  1. ROUTER_REQUEST
 *  2. ROUTER_NAVIGATION
 *  3. ROUTER_NAVIGATED
 *  4. ROUTER_CANCEL
 *  5. ROUTER_ERROR
 *
 *
 *  Router selector:
 *  The "getSelectors" method supplied within @ngrx/router-store provides functions for selecting common information from the router state
 *  router.selector.ts:
 *  step 1:
 *  import { getSelectors, RouterReducerState } from '@ngrx/router-store';
 *  import { createFeatureSelector } from '@ngrx/store';
 *
 *  export const selectRouter = createFeatureSelector<RouterReducerState>('router');
 *  export const {
 *    selectCurrentRoute, // select the current route
 *    selectFragment, // select the current route fragment
 *    selectQueryParams, // select the current route query params
 *    selectQueryParam, // factory function to select a query param
 *    selectRouteParams, // select the current route params
 *    selectRouteParam, // factory function to select a route param
 *    selectRouteData, // select the current route data
 *    selectUrl, // select the current url
 *      }   = getSelectors(selectRouter);
 *
 *
 * Configuration:
 * StoreRoutingConnectionModule.forRoot({
 *   stateKey?: string| Selector<any, RouterReducerState<T>> => The name of reducer key, defaults to router. it is possible to provide a select function,
 *   serializer: DefaultRouterStateSerializer => How a router snapshot is serialized, you can also pass custom serializer,
 *   navigationActionTiming?: NavigationActionTiming => When the ROUTER_NAVIGATION is dispatched. Defaults to NavigationActionTiming.PreActivation.
 *                            Note: ROUTER_NAVIGATION is by default dispatched before any guards or resolvers run.
 *                            This may not always be ideal, for example if you rely on the action to be dispatched after guards and resolvers successfully ran and the new route will be activated.
 *                            You can change the dispatch timing by providing the corresponding config
 *                            NavigationActionTiming.PostActivation
 *  routerState: RouterState.Full or RouterState.Minimal =>  This property decides which router serializer should be used.
 *
 * })
 *
 *
 *
 *
 *
 * ----------------------------------------------------
 * @ngrx/entity: what is the use of entity
 * ----------------------------------------------------
 * 1. Entity State adapter for managing record collections.
 * 2. Entity provides an API to manipulate and query entity collections.
 * Pros:
 *  a. Reduces boilerplate for creating reducers that manage a collection of models.
 *  b. Provides performant CRUD operations for managing entity collections.
 *  c. Extensible type-safe adapters for selecting entity information.
 *
 * Installation:
 * npm install @ngrx/entity --save Or ng add @ngrx/entity@latest
 *
 * Entity interface:
 * 1. EntityState<T> : it is a predefined generic interface for a given entity collection.
 *    export interface EntityState<T>{
 *      ids:string[] |number[] => An array of all the primary ids in the collection,
 *      entities:{[id:string | id:number]:T} => A dictionary of entities in the collection indexed by the primary id
 *    }
 *
 *  Note: Extend this interface to provide any additional properties for the entity state.
 *
 *  How to use:
 *  Ex:
 *  Support you want to perform crud on post.
 *  step 1: CREATE POST MODAL into model directory
 *    export const IPost{
 *      id?:string,
 *      title:string,
 *      body:string,
 *      active?:boolean,
 *      insertAt:Date
 *    }
 *
 *  Step 2: CREATE POST ENTITY (using EntityState<T> importing from @ngrx/entity)
 *    import {EntityState} from '@ngrx/entity'
 *
 *    export const PostState extends EntityState<Post>{}
 *
 *  Step 3: CREATE POST ADAPTOR FOR EntityState<T>
 *    import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
 *
 *    export const PostState extends EntityState<Post>{} // creating poststate*
 *    export const postAdapter:EntityAdapter<Post> = createEntityAdaptor<Post>() // creating postAdapter
 *
 *    createEntityAdapter<T>:
 *    this method returning a generic entity adapter for a single entity state collection
 *    The method takes an object with 2 properties for configuration.
 *
 *    1. selectId: A method for selecting the primary id for the collection. Optional when the entity has a primary key of id
 *    2. sortComparer: A compare function used to sort the collection. The comparer function is only needed if the collection needs to be sorted before being displayed.
 *
 *    ex:
 *    export const postAdapter:EntityAdapter<Post> = createEntityAdaptor<Post>({
 *      selectId:(state:post)=>state.id,
 *      sortComparer:(a:Post, b:Post)=> a.title.localCompare(b.name)
 *    });
 *
 * Step 4: CREATE ADAPTER
 *  import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
 *
 *  // post state
 *  export const PostState extends EntityState<Post>{} // creating poststate*
 *  // post adaptor
 *  export const postAdapter:EntityAdapter<Post> = createEntityAdaptor<Post>() // creating postAdapter
 *  // post inital state
 *  const initialState:PostState = postAdapter.getInitialState();
 *
 *
 * Step 5: CREATE ACTIONS
 * import { createAction, props } from '@ngrx/store';
 * import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
 *
 * export const loadPosts = createAction('[Post/API] Load Posts', props<{ posts: Post[] }>());
 * export const addPost = createAction('[Post/API] Add Post', props<{ post: Post }>());
 * export const setPost = createAction('[Post/API] Set Post', props<{ post: Post }>());
 * export const upsertPost = createAction('[Post/API] Upsert Post', props<{ post: Post }>());
 * export const addPosts = createAction('[Post/API] Add Posts', props<{ posts: Post[] }>());
 * export const upsertPosts = createAction('[Post/API] Upsert Posts', props<{ posts: Post[] }>());
 * export const updatePost = createAction('[Post/API] Update Post', props<{ update: Update<Post> }>());
 * export const updatePosts = createAction('[Post/API] Update Posts', props<{ updates: Update<Post>[] }>());
 * export const mapPost = createAction('[Post/API] Map Post', props<{ entityMap: EntityMapOne<Post> }>());
 * export const mapPosts = createAction('[Post/API] Map Posts', props<{ entityMap: EntityMap<Post> }>());
 * export const deletePost = createAction('[Post/API] Delete Post', props<{ id: string }>());
 * export const deletePosts = createAction('[Post/API] Delete Posts', props<{ ids: string[] }>());
 * export const deletePostsByPredicate = createAction('[Post/API] Delete Posts By Predicate',  props<{ predicate: Predicate<User> }>())
 * export const clearPosts = createAction('[Post/API] Clear Posts');
 *
 *
 * Step 6: CREATE REDUCER
 *  import {createReducer} from '@ngrx/store
 *  import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
 *  export const PostState extends EntityState<Post>{} // creating poststate*
 *  export const postAdapter:EntityAdapter<Post> = createEntityAdaptor<Post>() // creating postAdapter
 *  const initialState:PostState = postAdapter.getInitialState();
 *
 *  const useReducer = createReduce(
 *   initialState,
 *   on(addPost, (state, { post }) => {
 *    return postAdapter.addOne(post, state)
 *   }),
 *  on(setPost, (state, { post }) => {
 *    return postAdapter.setOne(post, state)
 *  }),
 *  on(upsertPost (state, { post }) => {
 *    return postAdapter.upsertOne(post, state);
 *  }),
 *  on(addPosts, (state, { posts }) => {
 *    return postAdapter.addMany(posts, state);
 *  }),
 *  on(upsertPosts, (state, { posts }) => {
 *    return postAdapter.upsertMany(posts, state);
 *  }),
 *  on(updatePost, (state, { update }) => {
 *    return postAdapter.updateOne(update, state);
 *  }),
 *  on(updatePosts, (state, { updates }) => {
 *    return postAdapter.updateMany(updates, state);
 *  }),
 *  on(mapPost, (state, { entityMap }) => {
 *    return postAdapter.mapOne(entityMap, state);
 *  }),
 *  on(mapPosts, (state, { entityMap }) => {
 *    return postAdapter.map(entityMap, state);
 *  }),
 *  on(deletePost, (state, { id }) => {
 *    return postAdapter.removeOne(id, state);
 *  }),
 *  on(deletePosts, (state, { ids }) => {
 *    return postAdapter.removeMany(ids, state);
 *  }),
 *  on(deletePostsByPredicate, (state, { predicate }) => {
 *    return postAdapter.removeMany(predicate, state);
 *  }),
 *  on(loadPosts, (state, { posts }) => {
 *    return postAdapter.setAll(posts, state);
 *  }),
 *  on(clearPosts, state => {
 *    return postAdapter.removeAll({ ...state, selectedPostId: null });
 *  })
 * )
 *
 *   export function reducer(state:PostState,action:Action){
 *     return useReducer(state, action)
 *  }
 *
 *
 * // Adapter collection models:
 * 1.   addOne: Add one entity to the collection.
 * 2.   addMany: Add multiple entities to the collection.
 * 3.   setAll: Replace current collection with provided collection.
 * 4.   setOne: Add or Replace one entity in the collection.
 * 5.   removeOne: Remove one entity from the collection.
 * 6.   removeMany: Remove multiple entities from the collection, by id or by predicate.
 * 7.   removeAll: Clear entity collection.
 * 8.   updateOne: Update one entity in the collection. Supports partial updates.
 * 9.   updateMany: Update multiple entities in the collection. Supports partial updates.
 * 10.  upsertOne: Add or Update one entity in the collection. Supports partial updates.
 * 11.  upsertMany: Add or Update multiple entities in the collection. Supports partial updates.
 * 12.  mapOne: Update one entity in the collection by defining a map function.
 * 13.  map: Update multiple entities in the collection by defining a map function, similar to Array.map.
 *
 *
 * Step 7: CREATE POST SELECTOR
 * import {createSelector, createFeatureSelector} from '@ngrx/store'
 * import {postAdapter} from '../state'
 * const postState = createFeatureSelector<PostState>('post') // PostState means interface, post is reducer
 *
 * const {selectIds,  selectEntities,  selectAll,  selectTotal,} = postAdapter.getSelectors();
 *   or
 * const postSelector = postAdapter.getSelectors();
 *
 * export const getPosts = createSelector(postState, postSelector.selectAll)
 *
 *
 *
 * --------------------------------------
 * @ngrx/data
 * -------------------------------------
 *
 *
 */