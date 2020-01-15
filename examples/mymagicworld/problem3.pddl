(define (problem move-to-castle)
   (:domain magic-world)

   (:objects
      npc - player
      town field castle forest farmer swamp mountain - location
   )

   (:init
      ;(border town field)
      ;(border field castle)
	  (border mountain swamp)
	  (border mountain forest)
	  (border town swamp)
	  (border town forest)
	  (border forest town)
	  (border town castle)
	  ;(border )
	  
      ;(at npc town)
      (at npc mountain)
   )

   (:goal (and (at npc castle)))
)
